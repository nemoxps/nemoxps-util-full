/**
 * Shuffles the values of an array.
 * Mutates the original array.
 *
 * @param {Array} arr An array.
 * @returns {Array} The original array.
 */
let shuffle = (arr) => {
    let l = arr.length;
    if (l < 2)
      return arr;
    
    do
    {
      let random = Math.floor(Math.random() * l);
      [arr[random], arr[l]] = [arr[--l], arr[random]];
    }
    while (l > 0);
    
    return arr;
};


module.exports = shuffle;