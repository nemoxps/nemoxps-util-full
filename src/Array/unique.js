/**
 * Removes any values that appear more than once.
 *
 * @param {Array} arr An array.
 * @returns {Array} The filtered array.
 */
let unique = (arr) => {
    return [...new Set(arr)];
};


module.exports = unique;