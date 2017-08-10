/**
 * Gets the value at the nth index in an array.
 * Counts from the end if `n` is negative.
 *
 * @param {Array} arr An array.
 * @param {number} n An index.
 * @returns {*} The value at the `n`th index.
 */
let nth = (arr, n) => {
    let l = arr.length;
    if (!l)
      return;
    
    if (n < 0)
      n += l;
    return arr[n];
};


module.exports = nth;