let escapes = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#x27;',
    '`': '&#x60;', // In Internet Explorer ≤ 8
};

/**
 * Makes a string safe for the HTML context.
 *
 * @param {string} str A string.
 * @returns {string} The escaped string.
 */
let htmlspecialchars = (str) => {
    return str.replace(/[<>&"'`]/g, (match) => escapes[match]);
};


module.exports = htmlspecialchars;