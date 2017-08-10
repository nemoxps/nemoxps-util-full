let isObject = require('./isObject');


/**
 * Indicates if a variable is a plain object (`typeof` check + not-null check + prototype check).
 *
 * @param {*} o A variable.
 * @returns {boolean} `true` if `o` is a plain object.
 */
let isPlainObject = (o) => isObject(o) && Object.getPrototypeOf(o) === Object.prototype;


module.exports = isPlainObject;