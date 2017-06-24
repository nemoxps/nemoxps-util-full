let regexpspecialchars = require('./regexpspecialchars');


/**
 * Replaces identifiers delimited by an arbitrary delimiter pair with an associated value.
 *
 * @param {string} str A string.
 * @param {(string|string[])} [delimiters=['{{','}}']]
 *        {string} A single delimiter that will be used for both sides.
 *        {string[]} A delimiter pair.
 * @param {Object} [substitutions] An object containing the substitutions (key/value pairs).
 * @returns {(string|function)}
 *          {string} The substituted string (if substitutions are present).
 *          {function} A function that takes 1 argument: (substitutions) => string;
 */
let template = (str, delimiters, substitutions) => {
    if (typeof delimiters === 'string')
      delimiters = [delimiters, delimiters];
    else if (!Array.isArray(delimiters))
      [delimiters, substitutions] = [['{{', '}}'], delimiters];
    else if (delimiters.length === 1)
      delimiters[1] = delimiters[0];
    
    let reg = new RegExp(delimiters.map(regexpspecialchars).join('([\\w-]+?)'), 'g');
    let substitute = (substitutions) => {
        return str.replace(reg, (match, $1) => (Object.hasOwnProperty.call(substitutions, $1)) ? substitutions[$1] : match);
    };
    
    return (substitutions) ? substitute(substitutions) : substitute;
};


module.exports = template;