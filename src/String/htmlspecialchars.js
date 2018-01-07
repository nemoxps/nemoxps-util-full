let map = require('../Object/map');


let escapes = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#x27;',
};
let unescapes = map(escapes, (val, key) => [val, key]);

/**
 * Makes a string safe for the HTML context.
 *
 * @param {string} str A string.
 * @returns {string} The escaped string.
 */
let htmlspecialchars = (str) => {
    return str.replace(/[<>&"']/g, (match) => escapes[match]);
};

/**
 * Makes a string unsafe for the HTML context.
 *
 * @param {string} str A string.
 * @returns {string} The unescaped string.
 */
htmlspecialchars.reverse = (str) => {
    return str.replace(/&(?:lt|gt|amp|quot|#x27);/g, (match) => unescapes[match]);
};


module.exports = htmlspecialchars;