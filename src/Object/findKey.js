/**
 * Like `Array.prototype.findIndex`, but for Objects.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @returns {string} The found key.
 */
let findKey = (obj, iteratee) => {
    return Object.entries(obj).find(([key, val]) => iteratee(val, key, obj))[0];
};


module.exports = findKey;