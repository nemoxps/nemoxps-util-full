let _roundPrecision = require('./_roundPrecision');


/**
 * `Math.ceil` with precision support.
 *
 * @param {number} num A number.
 * @param {number} [precision=0] A precision integer.
 * @returns {number} The rounded number.
 */
let ceil = (num, precision = 0) => _roundPrecision('ceil', num, precision);


module.exports = ceil;