let swap = require('./swap');


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
      swap(arr, Math.floor(Math.random() * l--), l);
    
    return arr;
};


module.exports = shuffle;