let map = require('./map');


/**
 * Like `map`, but maps only the object's keys.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @returns {Object} The mapped object.
 */
let mapKeys = (obj, iteratee) => {
    return map(obj, (val, key, obj) => [iteratee(val, key, obj), val]);
};


module.exports = mapKeys;