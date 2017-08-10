let nth = require('../Array/nth');
let filter = require('./filter');


/**
 * Creates a new object from selected keys.
 *
 * @param {Object} obj An object.
 * @param {...string} keys One or more selected keys.
 * @param {Object} [acc] An accumulator.
 * @returns {Object} A new object that contains the selected entries.
 */
let pick = (obj, ...keys/* , acc */) => {
    let acc;
    if (typeof nth(keys, -1) !== 'string')
      [keys, acc] = [keys.slice(0, -1), nth(keys, -1)];
    
    return filter(obj, (val, key) => keys.includes(key), acc);
};


module.exports = pick;