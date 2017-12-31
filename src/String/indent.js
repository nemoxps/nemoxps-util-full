/**
 * Indents every line of a string (except blank lines).
 *
 * @param {string} str A string.
 * @param {int} [count=1] A number of repetitions of `char`.
 * @param {string} [char=' '] An indentation character.
 * @returns {string} The indented string.
 */
let indent = (str, count = 1, char = ' ') => {
    if (count === 0)
      return str;
    
    return str.replace(/^(?!\s*$)/gm, char.repeat(count));
};


module.exports = indent;