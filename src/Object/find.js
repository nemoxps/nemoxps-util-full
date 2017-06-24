/**
 * Like `Array.prototype.find`, but for Objects.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @returns {*} The found value.
 */
let find = (obj, iteratee) => {
    return Object.entries(obj).find(([key, val]) => iteratee(val, key, obj))[1];
};


module.exports = find;