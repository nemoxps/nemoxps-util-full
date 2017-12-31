let from = require('./from');
let toArray = require('./toArray');


/**
 * Adds a date unit to a date.
 *
 * @param {(Date|DateLike)} date A date.
 * @param {int} amount An amount.
 * @param {string} unit A date unit.
 * @returns {Date} The new date.
 * @throws {Error} Date#add: Unknown `unit`.
 */
let add = (date, amount, unit) => {
    date = from(date);
    if (unit.endsWith('s'))
      unit = unit.slice(0, -1);
    
    let changeDatePart = (idx, transform) => {
        return new Date(...toArray(date, 7).map((val, index) => (index === idx) ? transform(val) : val));
    };
    let idx = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'].indexOf(unit);
    if (idx !== -1)
      return changeDatePart(idx, (val) => val + amount);
    if (unit === 'week')
      return changeDatePart(2, (val) => val + 7 * amount);
    
    throw new Error('Date#add: Unknown `unit`.');
};


module.exports = add;