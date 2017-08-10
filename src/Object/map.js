let fromEntries = require('./fromEntries');


/**
 * Like `Array.prototype.map`, but for Objects.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @param {Object} [acc] An accumulator.
 * @returns {Object} The mapped object.
 */
let map = (obj, iteratee, acc) => {
    return fromEntries(Object.entries(obj).map(([key, val]) => iteratee(val, key, obj)), acc);
};


module.exports = map;