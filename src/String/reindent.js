let indent = require('./indent');
let stripIndent = require('./stripIndent');


/**
 * Re-Indents every line of a string (except blank lines).
 *
 * @param {string} str A string.
 * @param {int} [count=0] A number of repetitions of `char`.
 * @param {string} [char=' '] An indentation character.
 * @returns {string} The re-indented string.
 */
let reindent = (str, count = 0, char = ' ') => {
    return indent(stripIndent(str), count, char);
};


module.exports = reindent;