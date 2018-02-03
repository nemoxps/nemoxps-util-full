let path = require('path');

let test = require('blue-tape');

let dirTree = require('../../src/node/fsp/dirTree');
let { Directory, File } = dirTree;
let objMapKeys = require('../../src/Object/mapKeys');
let trimts = require('../../src/String/trimts');


test('fsp.dirTree.File', (t) => {
    let fn = File;
    let tt = (arg, expected, msg) => {
        t.deepEqual(new fn(arg), expected, msg);
    };
    let cwd = 'path/to/dir';
    
    tt(
        {
            path: path.join(cwd, 'file-1.txt'),
            size: 7,
        },
        {
            path: path.join(cwd, 'file-1.txt'),
            name: 'file-1.txt',
            ext: '.txt',
            base: 'file-1',
            size: 7,
        }
    );
    
    t.end();
});

test('fsp.dirTree.Directory', (t) => {
    let fn = Directory;
    let tt = (arg, expected, msg) => {
        t.deepEqual(new fn(arg), expected, msg);
    };
    let cwd = 'path/to/dir';
    
    tt(
        {
            path: cwd,
            dirs: [],
            files: [],
            isSearched: true,
        },
        {
            path: cwd,
            name: path.basename(cwd),
            dirs: [],
            files: [],
            size: 0,
            isSearched: true,
            isFullySearched: true,
            isExcluded: false,
        }
    );
    tt(
        {
            path: cwd,
            dirs: [
                {
                    path: path.join(cwd, 'dir-1'),
                    dirs: [],
                    files: [],
                    isSearched: false,
                },
            ],
            files: [
                {
                    path: path.join(cwd, 'file-1.txt'),
                    size: 7,
                },
            ],
            isSearched: true,
        },
        {
            path: cwd,
            name: path.basename(cwd),
            dirs: [
                {
                    path: path.join(cwd, 'dir-1'),
                    name: 'dir-1',
                    dirs: [],
                    files: [],
                    size: 0,
                    isSearched: false,
                    isFullySearched: false,
                    isExcluded: false,
                },
            ],
            files: [
                new File({
                    path: path.join(cwd, 'file-1.txt'),
                    size: 7,
                }),
            ],
            size: 7,
            isSearched: true,
            isFullySearched: false,
            isExcluded: false,
        }
    );
    tt(
        {
            path: cwd,
            dirs: [
                {
                    path: path.join(cwd, 'dir-1'),
                    dirs: [],
                    files: [
                        {
                            path: path.join(cwd, 'dir-1/file-1-1.txt'),
                            size: 9,
                        },
                    ],
                    isSearched: true,
                },
            ],
            files: [
                {
                    path: path.join(cwd, 'file-1.txt'),
                    size: 7,
                },
            ],
            isSearched: true,
        },
        {
            path: cwd,
            name: path.basename(cwd),
            dirs: [
                {
                    path: path.join(cwd, 'dir-1'),
                    name: 'dir-1',
                    dirs: [],
                    files: [
                        new File({
                            path: path.join(cwd, 'dir-1/file-1-1.txt'),
                            size: 9,
                        }),
                    ],
                    size: 9,
                    isSearched: true,
                    isFullySearched: true,
                    isExcluded: false,
                },
            ],
            files: [
                new File({
                    path: path.join(cwd, 'file-1.txt'),
                    size: 7,
                }),
            ],
            size: 16,
            isSearched: true,
            isFullySearched: true,
            isExcluded: false,
        }
    );
    
    let dir = {
        path: cwd,
        dirs: [
            {
                path: path.join(cwd, 'dir-1'),
                dirs: [
                    {
                        path: path.join(cwd, 'dir-1/dir-1-1'),
                        dirs: [],
                        files: [
                            {
                                path: path.join(cwd, 'dir-1/dir-1-1/file-1-1-1.txt'),
                                size: 11,
                            },
                        ],
                        isSearched: true,
                    },
                    {
                        path: path.join(cwd, 'dir-1/dir-1-2'),
                        dirs: [],
                        files: [],
                        isSearched: true,
                    },
                ],
                files: [
                    {
                        path: path.join(cwd, 'dir-1/file-1-1.txt'),
                        size: 9,
                    },
                ],
                isSearched: true,
            },
            {
                path: path.join(cwd, 'dir-2'),
                dirs: [],
                files: [
                    {
                        path: path.join(cwd, 'dir-2/file-2-1.txt'),
                        size: 9,
                    },
                ],
                isSearched: true,
            },
        ],
        files: [],
        isSearched: true,
    };
    
    t.test('fsp.dirTree.Directory#toString', (t) => {
        let fn = Directory;
        let tt = (v, expected, msg) => {
            t.equal(new fn(v).toString(), trimts(expected), msg);
        };
        
        tt(dir, `
            ${cwd.replace(/\\/g, '/')}/
            ├── dir-1/
            │   ├── dir-1-1/
            │   │   └── file-1-1-1.txt
            │   ├── dir-1-2/
            │   └── file-1-1.txt
            └── dir-2/
                └── file-2-1.txt
        `);
        
        t.end();
    });
    
    t.test('fsp.dirTree.Directory#getAllDirectories', (t) => {
        let fn = Directory;
        let tt = (v, arg, expected, msg) => {
            t.deepEqual(new fn(v).getAllDirectories(arg).map(({ name }) => name), expected, msg);
        };
        tt.default = (v, args, defaultArgs, msg) => {
            t.deepEqual(new fn(v).getAllDirectories(...args).map(({ name }) => name), new fn(v).getAllDirectories(...defaultArgs).map(({ name }) => name), msg);
        };
        
        tt.default(dir, [], [true]);
        
        tt(dir, true, [path.basename(cwd), 'dir-1', 'dir-1-1', 'dir-1-2', 'dir-2']);
        tt(dir, false, ['dir-1', 'dir-1-1', 'dir-1-2', 'dir-2']);
        
        t.end();
    });
    
    t.test('fsp.dirTree.Directory#getAllFiles', (t) => {
        let fn = Directory;
        let tt = (v, expected, msg) => {
            t.deepEqual(new fn(v).getAllFiles().map(({ name }) => name), expected, msg);
        };
        
        tt(dir, ['file-1-1.txt', 'file-1-1-1.txt', 'file-2-1.txt']);
        
        t.end();
    });
    
    t.end();
});

test('fsp.dirTree', async (t) => {
    let FIXTURE = 'fsp.dirTree.fixture';
    let cwd = path.join(__dirname, FIXTURE);
    let fn = dirTree;
    let tt = async (args, expected, msg) => {
        args = [path.join(cwd, args[0]), ...args.slice(1)];
        t.deepEqual(await fn(...args), new Directory(expected), msg);
    };
    tt.default = async (args, defaultArgs, msg) => {
        args = [path.join(cwd, args[0]), ...args.slice(1)];
        defaultArgs = [path.join(cwd, defaultArgs[0]), ...defaultArgs.slice(1)];
        t.deepEqual(await fn(...args), await fn(...defaultArgs), msg);
    };
    tt.shouldReject = async (args, msg) => {
        args = [path.join(cwd, args[0]), ...args.slice(1)];
        await t.shouldReject(fn(...args), msg);
    };
    
    await tt.default(['./'], ['./', 0]);
    await tt.default(['./', false], ['./', 0]);
    await tt.default(['./', true], ['./', Infinity]);
    
    await tt(['./', 0], {
        path: cwd,
        dirs: [
            {
                path: path.join(cwd, 'dir-1'),
                dirs: [],
                files: [],
                isSearched: false,
            },
            {
                path: path.join(cwd, 'dir-2'),
                dirs: [],
                files: [],
                isSearched: false,
            },
        ],
        files: [
            {
                path: path.join(cwd, 'file-1.txt'),
                size: 7,
            },
            {
                path: path.join(cwd, 'file-2.txt'),
                size: 7,
            },
        ],
        isSearched: true,
    });
    await tt(['./', 1], {
        path: cwd,
        dirs: [
            {
                path: path.join(cwd, 'dir-1'),
                dirs: [
                    {
                        path: path.join(cwd, 'dir-1/dir-1-1'),
                        dirs: [],
                        files: [],
                        isSearched: false,
                    },
                    {
                        path: path.join(cwd, 'dir-1/dir-1-2'),
                        dirs: [],
                        files: [],
                        isSearched: false,
                    },
                ],
                files: [
                    {
                        path: path.join(cwd, 'dir-1/file-1-1.txt'),
                        size: 9,
                    },
                ],
                isSearched: true,
            },
            {
                path: path.join(cwd, 'dir-2'),
                dirs: [],
                files: [
                    {
                        path: path.join(cwd, 'dir-2/file-2-1.txt'),
                        size: 9,
                    },
                ],
                isSearched: true,
            },
        ],
        files: [
            {
                path: path.join(cwd, 'file-1.txt'),
                size: 7,
            },
            {
                path: path.join(cwd, 'file-2.txt'),
                size: 7,
            },
        ],
        isSearched: true,
    });
    await tt(['./', true], {
        path: cwd,
        dirs: [
            {
                path: path.join(cwd, 'dir-1'),
                dirs: [
                    {
                        path: path.join(cwd, 'dir-1/dir-1-1'),
                        dirs: [],
                        files: [
                            {
                                path: path.join(cwd, 'dir-1/dir-1-1/file-1-1-1.txt'),
                                size: 11,
                            },
                        ],
                        isSearched: true,
                    },
                    {
                        path: path.join(cwd, 'dir-1/dir-1-2'),
                        dirs: [],
                        files: [],
                        isSearched: true,
                    },
                ],
                files: [
                    {
                        path: path.join(cwd, 'dir-1/file-1-1.txt'),
                        size: 9,
                    },
                ],
                isSearched: true,
            },
            {
                path: path.join(cwd, 'dir-2'),
                dirs: [],
                files: [
                    {
                        path: path.join(cwd, 'dir-2/file-2-1.txt'),
                        size: 9,
                    },
                ],
                isSearched: true,
            },
        ],
        files: [
            {
                path: path.join(cwd, 'file-1.txt'),
                size: 7,
            },
            {
                path: path.join(cwd, 'file-2.txt'),
                size: 7,
            },
        ],
        isSearched: true,
    });
    
    await tt.shouldReject(['./', -1]);
    await tt.shouldReject(['./file-1.txt']);
    
    await t.test('fsp.dirTree.from', async (t) => {
        let fn = dirTree.from;
        let tt = async (arg, expected, msg) => {
            arg = objMapKeys(arg, (val, key) => path.join(cwd, key));
            t.deepEqual((await fn(arg)).map(({ name }) => name), expected, msg);
        };
        
        await tt(
            {
                'dir-1': {
                    './': 0,
                    'dir-1-1': 0,
                },
                'dir-1/dir-1-1': 0,
                'dir-1/dir-1-2': 0,
                'dir-2': 0,
            },
            ['dir-1', 'dir-1-1', 'dir-1-2', 'dir-2']
        );
    });
});