/**
 * Removes all occurrences of a value in an array.
 * Mutates the original array.
 *
 * @param {Array} arr An array.
 * @param {...*} values One or more values.
 * @returns {Array} The original array.
 */
let pull = (arr, ...values) => {
    for (let value of values)
    {
      let idx = 0;
      while ((idx = arr.indexOf(value, idx)) > -1)
        arr.splice(idx, 1);
    }
    
    return arr;
};


module.exports = pull;