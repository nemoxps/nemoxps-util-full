/**
 * Capitalizes a string.
 *
 * @param {string} str A string.
 * @returns {string} The capitalized string.
 */
let capitalize = (str) => {
    return (str.length) ? str[0].toUpperCase() + str.slice(1).toLowerCase() : '';
};


module.exports = capitalize;