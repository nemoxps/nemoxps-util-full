/**
 * Like `Array.prototype.findIndex`, but for Objects.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @returns {string} The found key.
 */
let findKey = (obj, iteratee) => {
    let found = Object.entries(obj).find(([key, val]) => iteratee(val, key, obj));
    return (found !== undefined) ? found[0] : found;
};


module.exports = findKey;