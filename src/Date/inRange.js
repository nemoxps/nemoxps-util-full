let numInRange = require('../Number/inRange');
let from = require('./from');


/**
 * Indicates if a date is in a given range.
 * `startDate` and `endDate` inclusive (i.e. [startDate, endDate]).
 *
 * @param {(Date|DateLike)} date A date.
 * @param {(Date|DateLike)} startDate A starting point of the range.
 * @param {(Date|DateLike)} endDate An ending point of the range.
 * @returns {boolean} `true` if `date` is in the range.
 */
let inRange = (date, startDate, endDate) => {
    date = from(date); startDate = from(startDate); endDate = from(endDate);
    
    return numInRange(date.getTime(), startDate.getTime(), endDate.getTime());
};


module.exports = inRange;