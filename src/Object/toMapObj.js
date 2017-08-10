let isPlainObject = require('./isPlainObject');
let mapValues = require('./mapValues');


/**
 * Transforms an object to a map object (`Object.create(null)`).
 *
 * @param {Object} obj An object.
 * @param {boolean} [recursive=false] `true` if every object inside of `obj` should be transformed too.
 * @returns {Object} A map object of `obj`.
 */
let toMapObj = (obj, recursive = false) => {
    return mapValues(obj, (val) => (recursive && isPlainObject(val)) ? toMapObj(val, true) : val, Object.create(null));
};


module.exports = toMapObj;