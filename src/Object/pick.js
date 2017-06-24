let filter = require('./filter');


/**
 * Creates a new object from selected keys.
 *
 * @param {Object} obj An object.
 * @param {...string} keys One or more selected keys.
 * @returns {Object} A new object that contains the selected entries.
 */
let pick = (obj, ...keys) => {
    return filter(obj, (val, key) => keys.includes(key));
};


module.exports = pick;