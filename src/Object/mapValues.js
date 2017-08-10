let map = require('./map');


/**
 * Like `map`, but maps only the object's values.
 *
 * @param {Object} obj An object.
 * @param {function} iteratee A function that is called for each element.
 * @param {Object} [acc] An accumulator.
 * @returns {Object} The mapped object.
 */
let mapValues = (obj, iteratee, acc) => {
    return map(obj, (val, key, obj) => [key, iteratee(val, key, obj)], acc);
};


module.exports = mapValues;