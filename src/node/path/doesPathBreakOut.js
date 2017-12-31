let path = require('path');


/**
 * Indicates if a path breaks out of an intended directory.
 *
 * @param {string} dirPath The intended directory.
 * @param {string} subPath The path to check.
 * @returns {boolean} `true` if `subPath` breaks out of `dirPath`.
 */
let doesPathBreakOut = (dirPath, subPath) => {
    return path.relative(dirPath, path.join(dirPath, subPath)).startsWith(`..${path.sep}`);
};


module.exports = doesPathBreakOut;