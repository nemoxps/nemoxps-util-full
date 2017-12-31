let at = require('../Array/at');
let filter = require('./filter');


/**
 * Creates a new object from not selected keys.
 *
 * @param {Object} obj An object.
 * @param {...string} keys One or more selected keys.
 * @param {Object} [acc] An accumulator.
 * @returns {Object} A new object that contains the not selected entries.
 */
let pickNot = (obj, ...keys/* , acc */) => {
    let acc;
    if (typeof at(keys, -1) !== 'string')
      [keys, acc] = [keys.slice(0, -1), at(keys, -1)];
    
    return filter(obj, (val, key) => !keys.includes(key), acc);
};


module.exports = pickNot;