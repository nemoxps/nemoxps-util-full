/**
 * De-Indents every line of a string based on the lowest indentation.
 *
 * @param {string} str A string.
 * @returns {string} The de-indented string.
 */
let stripIndent = (str) => {
    let indentations = str.match(/^[ \t]*(?=\S)/gm);
    if (!indentations)
      return str;
    
    let stripCount = Math.min(...indentations.map((str) => str.length));
    return (stripCount > 0) ? str.replace(new RegExp(`^[ \\t]{${stripCount}}`, 'gm'), '') : str;
};


module.exports = stripIndent;