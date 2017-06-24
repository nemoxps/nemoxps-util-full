let _roundPrecision = require('./_roundPrecision');


/**
 * `Math.round` with precision support.
 *
 * @param {number} num A number.
 * @param {number} [precision=0] A precision integer.
 * @returns {number} The rounded number.
 */
let round = (num, precision = 0) => _roundPrecision('round', num, precision);


module.exports = round;