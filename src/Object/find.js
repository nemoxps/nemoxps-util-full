/**
 * Like `Array.prototype.find`, but for Objects.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @returns {*} The found value.
 */
let find = (obj, iteratee) => {
    let found = Object.entries(obj).find(([key, val]) => iteratee(val, key, obj));
    return (found !== undefined) ? found[1] : found;
};


module.exports = find;