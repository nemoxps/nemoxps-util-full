/**
 * Turns a date into an array.
 *
 * @param {Date} date A date.
 * @param {int} [accuracy=3] An integer defining how many date parts should be taken.
 * @returns {int[]} [year, [month, [date, [hours, [minutes, [seconds, [milliseconds]]]]]]].
 */
let toArray = (date, accuracy = 3) => {
    let arr = [];
    if (accuracy >= 1) arr.push(date.getFullYear());
    if (accuracy >= 2) arr.push(date.getMonth());
    if (accuracy >= 3) arr.push(date.getDate());
    if (accuracy >= 4) arr.push(date.getHours());
    if (accuracy >= 5) arr.push(date.getMinutes());
    if (accuracy >= 6) arr.push(date.getSeconds());
    if (accuracy >= 7) arr.push(date.getMilliseconds());
    return arr;
};


module.exports = toArray;