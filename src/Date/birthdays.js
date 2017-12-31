let filterIndex = require('../Array/filterIndex');
let from = require('./from');
let add = require('./add');
let inRange = require('./inRange');


/**
 * Finds all birthdays in a given time span.
 *
 * @param {(Date[]|DateLike[])} bds A list of birthdays.
 * @param {int} amount An amount.
 * @param {string} unit A date unit.
 * @param {(Date|DateLike)} [now=new Date()] The time span's starting point.
 * @returns {int[]} A list of `bds` array indexes.
 */
let birthdays = (bds, amount, unit, now = new Date()) => {
    bds = bds.map((bd) => from(bd)); now = from(now);
    
    let year = now.getFullYear();
    return filterIndex(bds, (bd) => inRange(new Date(year, bd.getMonth(), bd.getDate()), now, add(now, amount, unit)));
};


module.exports = birthdays;