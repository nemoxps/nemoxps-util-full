/**
 * Creates all anagrams from a string.
 *
 * @param {string} str A string.
 * @returns {string[]} The anagrams.
 */
let anagrams = (str) => {
    let l = str.length;
    if (!l)
      return [];
    if (l <= 2)
      return (l === 1) ? [str] : [str, str[1] + str[0]];
    
    return str.split('').reduce((r, char, index) => {
        return r.concat(...anagrams(str.slice(0, index) + str.slice(index + 1)).map((val) => char + val));
    }, []);
};


module.exports = anagrams;