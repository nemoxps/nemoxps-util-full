let isObject = require('./isObject');
let fromEntries = require('./fromEntries');
let mapValues = require('./mapValues');


/**
 * Transforms an object to a map object (`Object.create(null)`).
 *
 * @param {Object} obj An object.
 * @param {boolean} [recursive=false] `true` if every object inside of `obj` should be transformed too.
 * @returns {Object} A map object of `obj`.
 */
let toMapObj = (obj, recursive = false) => {
    let objProto = Object.prototype;
    return fromEntries(Object.entries(mapValues(obj, (val) => {
        return (recursive && isObject(val) && Object.getPrototypeOf(val) === objProto) ? toMapObj(val) : val;
    })), Object.create(null));
};


module.exports = toMapObj;