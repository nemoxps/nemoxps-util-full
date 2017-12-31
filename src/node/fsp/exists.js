let fsp = require('./fsp');


/**
 * Indicates if a file or directory exists.
 *
 * @param {string} path A path.
 * @returns {Promise} `Promise.then(exists: boolean)`
 */
let exists = (path) => fsp.access(path).then(() => true, () => false);


module.exports = exists;