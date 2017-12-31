/**
 * Indicates if a number is in a given range.
 * `start` and `end` inclusive (i.e. [start, end]).
 *
 * @param {number} num A number.
 * @param {number} [start=0] A starting point of the range. (Optional)
 * @param {number} end An ending point of the range.
 * @returns {boolean} `true` if `num` is in the range.
 */
let inRange = function (num, start, end) {
    if (arguments.length === 2)
      [start, end] = [0, start];
    
    if (start > end)
      [start, end] = [end, start];
    return num >= start && num <= end;
};


module.exports = inRange;