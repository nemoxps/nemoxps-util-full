/**
 * Creates a new array from selected indexes.
 *
 * @param {Array} arr An array.
 * @param {...int} indexes One or more selected indexes.
 * @returns {Array} A new array that contains the selected values.
 */
let pick = (arr, ...indexes) => {
    indexes = indexes.map((index) => (index >= 0) ? index : index + arr.length);
    return indexes.map((index) => arr[index]);
};


module.exports = pick;