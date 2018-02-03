let parse = require('./parse');


/**
 * Converts a date-like date to a Date instance.
 *
 * @param {(Date|string|string[]|int|int[])} date A date.
 * @param {string} [format] A format.
 * @returns {Date} The date.
 */
let from = (date, format) => {
    switch (true)
    {
      case typeof date === 'string':
        return parse(date, format);
      
      case Number.isInteger(date):
        return new Date(date);
      
      case Array.isArray(date) && date.length !== 0:
        if (date.every(Number.isInteger))
          return new Date(...(date.length !== 1) ? date : [date[0], 0]);
        return from(...date);
    }
    return new Date(date);
};


module.exports = from;