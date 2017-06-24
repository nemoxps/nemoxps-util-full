/**
 * Indicates if a variable is an object (`typeof` check + not-null check).
 *
 * @param {*} o A variable.
 * @returns {boolean} `true` if `o` is an object.
 */
let isObject = (o) => o !== null && typeof o === 'object';


module.exports = isObject;