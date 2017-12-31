let from = require('./from');
let leapDaysBetween = require('./leapDaysBetween');


/**
 * Calculates the elapsed time in a given range.
 *
 * @param {(Date|DateLike)} startDate A starting point of the range.
 * @param {(Date|DateLike)} [endDate=new Date()] An ending point of the range.
 * @returns {Object} The elapsed time.
 */
let age = (startDate, endDate = new Date()) => {
    startDate = from(startDate); endDate = from(endDate);
    
    let time = endDate.getTime() - startDate.getTime();
    let leapDays = leapDaysBetween(startDate, endDate);
    
    let seconds = time / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let years = (days - leapDays) / 365;
    
    return {
        years: Math.floor(years),
        days: Math.floor(days),
        hours: Math.floor(hours),
        minutes: Math.floor(minutes),
        seconds: Math.floor(seconds),
        exact: { years, days, hours, minutes, seconds },
    };
};

/**
 * Calculates the time difference in a given range.
 *
 * @param {(Date|DateLike)} date1 Date 1 of the range.
 * @param {(Date|DateLike)} date2 Date 2 of the range.
 * @returns {Object} The time difference.
 */
age.diff = (date1, date2) => {
    date1 = from(date1); date2 = from(date2);
    
    let older = (date1.getTime() <= date2.getTime()) ? date1 : date2;
    let younger = (older === date2) ? date1 : date2;
    let time = younger.getTime() - older.getTime();
    let leapDays = leapDaysBetween(older, younger);
    
    let seconds = time / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let years = (days - leapDays) / 365;
    
    return {
        years: Math.floor(years),
        days: Math.floor(days),
        hours: Math.floor(hours),
        minutes: Math.floor(minutes),
        seconds: Math.floor(seconds),
        exact: { years, days, hours, minutes, seconds },
        older: (older === date1) ? 0 : 1,
        younger: (younger === date1) ? 0 : 1,
    };
};


module.exports = age;