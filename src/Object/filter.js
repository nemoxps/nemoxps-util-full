let fromEntries = require('./fromEntries');


/**
 * Like `Array.prototype.filter`, but for Objects.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @param {Object} [acc] An accumulator.
 * @returns {Object} The filtered object.
 */
let filter = (obj, iteratee, acc) => {
    return fromEntries(Object.entries(obj).filter(([key, val]) => iteratee(val, key, obj)), acc);
};


module.exports = filter;