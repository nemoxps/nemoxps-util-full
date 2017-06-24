let fromEntries = require('./fromEntries');


/**
 * Like `Array.prototype.map`, but for Objects.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @returns {Object} The mapped object.
 */
let map = (obj, iteratee) => {
    return fromEntries(Object.entries(obj).map(([key, val]) => iteratee(val, key, obj)));
};


module.exports = map;