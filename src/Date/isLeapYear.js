/**
 * Checks if a year is a leap year.
 *
 * @param {int} year A year.
 * @returns {boolean} `true` if the year is a leap year.
 */
let isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};


module.exports = isLeapYear;