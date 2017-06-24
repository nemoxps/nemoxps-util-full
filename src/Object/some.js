/**
 * Like `Array.prototype.some`, but for Objects.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @returns {boolean} `true` if at least one entry pass the `iteratee` function.
 */
let some = (obj, iteratee) => {
    return Object.entries(obj).some(([key, val]) => iteratee(val, key, obj));
};


module.exports = some;