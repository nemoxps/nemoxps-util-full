/**
 * Gets a random number in an arbitrary range.
 *
 * @param {int} [min=0] A lower bound. (Optional)
 * @param {int} max An upper bound.
 * @returns {int} A random number.
 */
let random = function (min, max) {
    if (arguments.length === 1)
      [min, max] = [0, min];
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // return Math.round(Math.random() * (max - min + 1) - 0.5) + min;
};


module.exports = random;