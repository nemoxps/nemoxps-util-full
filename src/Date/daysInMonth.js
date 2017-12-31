let isLeapYear = require('./isLeapYear');


/**
 * Gets the number of days in a month.
 *
 * @param {int} year A year.
 * @param {int} month A month (0 based).
 * @returns {int} The number of days in the month.
 */
let daysInMonth = (year, month) => {
    return (month !== 1) ? 31 - month % 7 % 2 : (isLeapYear(year)) ? 29 : 28;
};


module.exports = daysInMonth;