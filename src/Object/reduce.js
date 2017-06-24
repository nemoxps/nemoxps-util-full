/**
 * Like `Array.prototype.reduce`, but for Objects.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @param {*} accumulator An accumulator.
 * @returns {*} The reduced object.
 */
let reduce = (obj, iteratee, accumulator) => {
    return Object.entries(obj).reduce((acc, [key, val]) => iteratee(acc, val, key, obj), accumulator);
};


module.exports = reduce;