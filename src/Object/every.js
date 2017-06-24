/**
 * Like `Array.prototype.every`, but for Objects.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @returns {boolean} `true` if all entries pass the `iteratee` function.
 */
let every = (obj, iteratee) => {
    return Object.entries(obj).every(([key, val]) => iteratee(val, key, obj));
};


module.exports = every;