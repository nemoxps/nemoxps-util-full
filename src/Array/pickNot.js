/**
 * Creates a new array from not selected indexes.
 *
 * @param {Array} arr An array.
 * @param {...int} indexes One or more selected indexes.
 * @returns {Array} A new array that contains the not selected values.
 */
let pickNot = (arr, ...indexes) => {
    indexes = indexes.map((index) => (index >= 0) ? index : index + arr.length);
    return arr.filter((val, index) => !indexes.includes(index));
};


module.exports = pickNot;