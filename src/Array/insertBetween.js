/**
 * Inserts a value between every item in an array.
 * Mutates the original array.
 *
 * @param {Array} arr An array.
 * @param {*} value A value.
 * @returns {Array} The original array.
 */
let insertBetween = (arr, value) => {
    let l = arr.length;
    if (l <= 0)
      return arr;
    
    while (--l)
      arr.splice(l, 0, value);
    
    return arr;
};


module.exports = insertBetween;