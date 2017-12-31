let from = require('./from');
let isLeapYear = require('./isLeapYear');


/**
 * Counts the number of leap days in a given range.
 *
 * @param {(Date|DateLike)} startDate A starting point of the range.
 * @param {(Date|DateLike)} [endDate=new Date()] An ending point of the range.
 * @returns {int} The number of leap days.
 */
let leapDaysBetween = (startDate, endDate = new Date()) => {
    startDate = from(startDate); endDate = from(endDate);
    if (startDate.getTime() > endDate.getTime())
      [startDate, endDate] = [endDate, startDate];
    
    let leapDays = 0;
    for (let sYear = startDate.getFullYear(), eMonth = endDate.getMonth(), i = sYear, l = endDate.getFullYear(); i <= l; i++)
      if (
        (i > sYear || startDate.getMonth() <= 1) &&
        (i + 1 <= l || eMonth > 1 || eMonth === 1 && endDate.getDate() === 29) &&
        isLeapYear(i)
      )
        leapDays++;
    return leapDays;
};


module.exports = leapDaysBetween;