let swap = require('../Array/swap');


/**
 * Creates all anagrams from a string.
 *
 * @param {string} str A string.
 * @returns {string[]} The anagrams.
 */
let anagrams = (str) => {
    let length = str.length;
    if (!length)
      return [];
    
    let chars = str.split('');
    let counter = Array(length).fill(0);
    let anagrams = [str];
    let i = 0;
    
    while (i < length)
      if (counter[i] < i)
      {
        swap(chars, (i % 2 === 1) ? counter[i] : 0, i);
        anagrams.push(chars.join(''));
        counter[i]++;
        i = 0;
      }
      else
      {
        counter[i] = 0;
        i++;
      }
    
    return anagrams;
};


module.exports = anagrams;