/**
 * Removes all occurrences of a value in an array.
 * Mutates the original array.
 *
 * @param {Array} arr An array.
 * @param {...*} values One or more values.
 * @returns {Array} The removed values.
 */
let pull = (arr, ...values) => {
    let r = [];
    for (let value of values)
    {
      let idx = 0;
      while ((idx = arr.indexOf(value, idx)) > -1)
      {
        r.push(arr[idx]);
        arr.splice(idx, 1);
      }
    }
    
    return r;
};


module.exports = pull;