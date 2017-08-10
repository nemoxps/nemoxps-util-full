/**
 * Inserts a value between every item in an array.
 *
 * @param {Array} arr An array.
 * @param {*} value A value.
 * @returns {Array} The new array.
 */
let insertBetween = (arr, value) => {
    arr = arr.slice();
    
    let l = arr.length;
    if (l <= 1)
      return arr;
    
    while (--l)
      arr.splice(l, 0, value);
    
    return arr;
};


module.exports = insertBetween;