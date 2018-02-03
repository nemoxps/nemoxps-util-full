let stripIndent = require('./stripIndent');


/**
 * De-Indents every line of a string and trims leading and trailing newlines.
 *
 * @param {string} str A string.
 * @returns {string} The trimmed string.
 */
let trimts = (str) => {
    return stripIndent(str.replace(/^\n|\n *$/g, ''));
};


module.exports = trimts;