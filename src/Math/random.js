/**
 * Gets a random number in an arbitrary range.
 *
 * @param {number} [min=0] A lower bound.
 * @param {number} max An upper bound.
 * @returns {number} A random number (integer).
 */
let random = function (min, max) {
    if (arguments.length === 1)
      [min, max] = [0, min];
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // return Math.round(Math.random() * (max - min + 1) - 0.5) + min;
};


module.exports = random;