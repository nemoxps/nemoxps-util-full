let map = require('./map');


/**
 * Like `map`, but maps only the object's values.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @returns {Object} The mapped object.
 */
let mapValues = (obj, iteratee) => {
    return map(obj, (val, key, obj) => [key, iteratee(val, key, obj)]);
};


module.exports = mapValues;