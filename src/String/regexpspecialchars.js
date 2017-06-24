/**
 * Makes a string safe for the RegExp context.
 *
 * @param {string} str A string.
 * @returns {string} The escaped string.
 */
let regexpspecialchars = (str) => {
    return str.replace(/[\\|^$()[\]{}?*+.-]/g, '\\$&');
};


module.exports = regexpspecialchars;