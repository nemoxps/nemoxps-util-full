let regexpspecialchars = require('./regexpspecialchars');


/**
 * Prepares a string so it can be used as a template.
 *
 * @param {string} str A string.
 * @param {(string|string[])} [delimiters=['{{','}}']]
 *        {string} A single delimiter that will be used for both sides.
 *        {string[]} A delimiter pair.
 * @returns {function} A function that takes 1 argument: (substitutions) => string
 */
let template = (str, delimiters = ['{{', '}}']) => {
    if (typeof delimiters === 'string')
      delimiters = [delimiters, delimiters];
    else if (delimiters.length === 1)
      delimiters = [delimiters[0], delimiters[0]];
    
    let reg = new RegExp(delimiters.map(regexpspecialchars).join('([\\w-]+?)'), 'g');
    return (substitutions) => {
        return str.replace(reg, (match, $1) => (Object.hasOwnProperty.call(substitutions, $1)) ? substitutions[$1] : match);
    };
};


module.exports = template;