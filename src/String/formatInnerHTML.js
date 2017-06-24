let format = require('./format');


/**
 * Re-Indents every line in template literal strings to 2 spaces and adds newlines at the start and end.
 * Supports array flattening.
 *
 * @param {string[]} literals_ (Template Literal String)
 * @param {...*} substitutions (Template Literal String)
 * @returns {string} The re-indented template literal string.
 */
let formatInnerHTML = (literals_, ...substitutions) => {
    return '\n' + format(literals_, ...substitutions).split('\n').map((line) => '  ' + line).join('\n') + '\n';
};


module.exports = formatInnerHTML;