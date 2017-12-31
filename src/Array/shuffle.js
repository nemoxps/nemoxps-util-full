/**
 * Shuffles the values of an array.
 *
 * @param {Array} arr An array.
 * @returns {Array} The shuffled array.
 */
let shuffle = (arr) => {
    arr = arr.slice();
    
    let l = arr.length;
    if (l < 2)
      return arr;
    
    while (l)
    {
      let random = Math.floor(Math.random() * l--);
      [arr[l], arr[random]] = [arr[random], arr[l]];
    }
    
    return arr;
};


module.exports = shuffle;