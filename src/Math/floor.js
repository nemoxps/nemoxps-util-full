let _roundPrecision = require('./_roundPrecision');


/**
 * `Math.floor` with precision support.
 *
 * @param {number} num A number.
 * @param {number} [precision=0] A precision integer.
 * @returns {number} The rounded number.
 */
let floor = (num, precision = 0) => _roundPrecision('floor', num, precision);


module.exports = floor;