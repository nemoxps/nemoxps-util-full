let EOL = require('os').EOL;
let path = require('path');

let chalk;
try
{
  chalk = require('chalk'); // eslint-disable-line global-require
}
catch (e) {}

let objMapKeys = require('../../Object/mapKeys');
let objReduce = require('../../Object/reduce');
let fsp = require('./fsp');


/**
 * Class representing a file.
 */
class File {
    /**
     * @param {Object} file Raw object representation of the File class.
     * @param {string} file.path The file's path.
     * @param {int} file.size The file's size.
     */
    constructor(file) {
        this.path = file.path;
        this.name = path.basename(this.path);
        this.ext = path.extname(this.name);
        this.base = path.basename(this.name, this.ext);
        this.size = file.size;
    }
}
File.prototype.type = 'File';

/**
 * Class representing a directory.
 */
class Directory {
    /**
     * @param {Object} dir Raw object representation of the Directory class.
     * @param {string} dir.path The dir's path.
     * @param {Object[]} dir.dirs An array of sub-directories in raw object representation.
     * @param {Object[]} dir.files An array of files in raw object representation.
     * @param {boolean} dir.isSearched `true` if the directory has been searched.
     * @param {boolean} [dir.isExcluded=false] `true` if the directory was excluded from searching.
     */
    constructor(dir) {
        this.path = dir.path;
        this.name = path.basename(this.path);
        this.dirs = dir.dirs.map((dir) => new Directory(dir));
        this.files = dir.files.map((file) => new File(file));
        this.size = this.dirs.concat(this.files).reduce((r, { size }) => r + size, 0);
        this.isSearched = dir.isSearched;
        this.isFullySearched = this.isSearched && this.dirs.every((dir) => dir.isFullySearched);
        this.isExcluded = (Object.hasOwnProperty.call(dir, 'isExcluded')) ? dir.isExcluded : false;
    }
    
    static Tokenizer(dir, { useColors = false, useOS = false } = {}) {
        let Types = {
            ROOT: 'ROOT',
            DIRECTORY: 'DIRECTORY',
            FILE: 'FILE',
            INDENTATION: 'INDENTATION',
            COMMENT: 'COMMENT',
            EOL: 'EOL',
        };
        let Styles = (useColors) ? Object.assign(Object.create(null), {
            [Types.ROOT]: chalk.bgBlue,
            [Types.DIRECTORY]: chalk.blue,
            [Types.FILE]: chalk.yellow,
        }) : null;
        
        class Token {
            constructor(type, text) {
                switch (type)
                {
                  case Types.ROOT:
                    if (!useOS)
                      text = text.replace(/\\/g, '/');
                    text += (useOS) ? path.sep : '/';
                    break;
                  
                  case Types.DIRECTORY:
                    text += (useOS) ? path.sep : '/';
                    break;
                  
                  case Types.COMMENT:
                    text = `/* ${text} */`;
                    break;
                  
                  case Types.EOL:
                    text = (useOS) ? EOL : '\n';
                    break;
                }
                
                this.type = type;
                this.text = text;
            }
            
            toString() {
                let { type, text } = this;
                if (!useColors)
                  return text;
                return (type in Styles) ? Styles[type](text) : text;
            }
        }
        
        class Tokenizer {
            constructor(dir) {
                this.tokens = [];
                this.add(Types.ROOT, dir.path);
                this.add(Types.EOL);
                this.tokenize(dir);
                if (this.tokens[this.tokens.length - 1].type === Types.EOL)
                  this.tokens.pop();
            }
            
            static addBranchSuffix(baseIndentation, isLast) {
                return baseIndentation + ((!isLast) ? '├── ' : '└── ');
            }
            static addIndentLevel(baseIndentation, isLast) {
                return baseIndentation + ((!isLast) ? '│   ' : '    ');
            }
            static addDeepIndentLevel(baseIndentation, isLast) {
                return Tokenizer.addIndentLevel(baseIndentation, isLast) + '    ';
            }
            
            add(type, text) {
                this.tokens.push(new Token(type, text));
            }
            
            tokenize(dir, baseIndentation = '') {
                let { DIRECTORY, FILE, INDENTATION, COMMENT, EOL } = Types;
                let l = dir.dirs.length + dir.files.length;
                
                for (let subDir of dir.dirs)
                {
                  let isLast = --l === 0;
                  
                  this.add(INDENTATION, Tokenizer.addBranchSuffix(baseIndentation, isLast));
                  this.add(DIRECTORY, subDir.name);
                  this.add(EOL);
                  
                  if (subDir.isExcluded)
                  {
                    this.add(INDENTATION, Tokenizer.addDeepIndentLevel(baseIndentation, isLast));
                    this.add(COMMENT, 'directory is excluded');
                    this.add(EOL);
                  }
                  else if (subDir.isSearched)
                    this.tokenize(subDir, Tokenizer.addIndentLevel(baseIndentation, isLast));
                  else
                  {
                    this.add(INDENTATION, Tokenizer.addDeepIndentLevel(baseIndentation, isLast));
                    this.add(COMMENT, 'unsearched directory');
                    this.add(EOL);
                  }
                }
                
                for (let file of dir.files)
                {
                  let isLast = --l === 0;
                  
                  this.add(INDENTATION, Tokenizer.addBranchSuffix(baseIndentation, isLast));
                  this.add(FILE, file.name);
                  this.add(EOL);
                }
            }
        }
        
        return new Tokenizer(dir);
    }
    
    /**
     * Stringifies this Directory.
     *
     * @param {(Object|boolean)} [options]
     *        {Object} Options object used for `Directory.Tokenizer`.
     *        {boolean} -> options.useColors
     * @param {boolean} [options.useColors] `true` if the output should be colorful.
     * @param {boolean} [options.useOS] `true` if OS specific values should be used (e.g. \r?\n | [/\\]).
     * @returns {string} The stringified Directory.
     */
    toString(options) {
        if (typeof options === 'boolean')
          options = { useColors: options };
        if (options && options.useColors && chalk === undefined)
        {
          console.warn('fsp.dirTree: For colorful output install the optional dependency `chalk`.');
          options.useColors = false;
        }
        
        return Directory.Tokenizer(this, options).tokens.map(String).join('');
    }
    
    /**
     * Gets every Directory inside of this Directory.
     *
     * @param {boolean} [thisInclusive=true] `true` if this Directory should appear in the output.
     * @returns {Directory[]} The list of directories.
     */
    getAllDirectories(thisInclusive = true) {
        return this.dirs.reduce((r, dir) => r.concat(dir.getAllDirectories()), (thisInclusive) ? [this] : []);
    }
    
    /**
     * Gets every File inside of this Directory.
     *
     * @returns {File[]} The list of files.
     */
    getAllFiles() {
        return this.dirs.reduce((r, dir) => r.concat(dir.getAllFiles()), this.files);
    }
}
Directory.prototype.type = 'Directory';

/**
 * Builds a tree structure from a directory's files and sub-directories.
 *
 * @param {string} dirPath A directory path.
 * @param {(int|boolean)} [depth=0]
 *        {int} A depth of recursive searching.
 *        {boolean} `true` equals `Infinity`, `false` equals `0`.
 * @param {Object} [options]
 * @param {string[]} [options.exclude=dirTree.defaultExclude]
 * @returns {Promise} `Promise.then(dir: Directory, err: Error)`
 */
let dirTree = async (dirPath, depth = 0, options = {}) => {
    dirPath = path.resolve(dirPath);
    if (typeof depth === 'boolean')
      depth = (depth) ? Infinity : 0;
    else if (depth === null)
      depth = 0;
    options = Object.assign({}, { exclude: dirTree.defaultExclude }, options);
    
    if (depth < 0)
      throw new Error('fsp.dirTree: `depth` can\'t be less than 0.');
    await fsp.stat(dirPath).then((stat) => {
        if (!stat.isDirectory())
          throw new Error('fsp.dirTree: `dirPath` should point to a directory.');
    });
    
    return (async function dirTree(itemPath, depth, options) {
        let stat = await fsp.stat(itemPath);
        if (stat.isFile())
          return { path: itemPath, size: stat.size, type: '_File' };
        if (stat.isDirectory())
        {
          let shouldExclude = options.exclude.includes(path.basename(itemPath));
          let shouldSearch = depth >= 0 && !shouldExclude;
          let dir = { path: itemPath, dirs: [], files: [], isSearched: shouldSearch, isExcluded: shouldExclude, type: '_Directory' };
          if (shouldSearch)
          {
            let subNames = await fsp.readdir(itemPath);
            let subPaths = subNames.map((subName) => path.join(itemPath, subName));
            let subItems = await Promise.all(subPaths.map((subPath) => dirTree(subPath, depth - 1, options)));
            for (let subItem of subItems)
              if (subItem.type === '_Directory')
                dir.dirs.push(subItem);
              else if (subItem.type === '_File')
                dir.files.push(subItem);
          }
          return dir;
        }
        
        throw new Error(`fsp.dirTree: This shouldn't happen. (itemPath: ${itemPath})`);
    })(dirPath, depth, options).then((dir) => new Directory(dir));
};

dirTree.defaultExclude = ['.git', 'node_modules'];

/**
 * Converts a directory list to an array of directory trees.
 * A directory list looks like this:
 * `{
 *     'path/to/dir1': depth,
 *     'path/to/dir2': {
 *         './': depth,
 *         'path/to/subdir1': depth,
 *     },
 * }`
 *
 * @param {Object} dirList A directory list.
 * @returns {Promise} `Promise.then(dirs: Directory[], err: Error)`
 */
dirTree.from = (dirList) => {
    dirList = (function resolveDirList(dirList) {
        return objReduce(dirList, (r, depth, dirPath) => {
            if (typeof depth !== 'object' || depth === null)
              r[path.normalize(dirPath)] = depth;
            else
              Object.assign(r, objMapKeys(resolveDirList(depth), (depth2, dirPath2) => path.join(dirPath, dirPath2)));
            return r;
        }, {});
    })(dirList);
    
    return Promise.all(Object.entries(dirList).map(([dirPath, depth]) => dirTree(dirPath, depth)));
};


module.exports = dirTree;
module.exports.File = File;
module.exports.Directory = Directory;