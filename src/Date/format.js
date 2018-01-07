let locales = require('./locales');
let from = require('./from');


let token = /Y{4}|Y{2}|Mo|M{1,4}|Do|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|Z{1,2}|[Aa]|"[^"]*"|'[^']*'/g;
let literal = /\[([^\]]*)\]/g;

/*
|    | Token | Output |
|---:|---    |---     |
| Year | YYYY | 1970 1971 ... 2029 2030 |
|      | YY   | 70 71 ... 29 30 |
| Month | MMMM | January February ... November December |
|       | MMM  | Jan Feb ... Nov Dec |
|       | MM   | 01 02 ... 11 12 |
|       | M    | 1 2 ... 11 12 |
|       | Mo   | 1st 2nd ... 11th 12th |
| Day of Month | DD | 01 02 ... 30 31 |
|              | D  | 1 2 ... 30 31 |
|              | Do | 1st 2nd ... 30th 31st |
| Day of Week | dddd | Sunday Monday ... Friday Saturday |
|             | ddd  | Sun Mon ... Fri Sat |
|             | dd   | Su Mo ... Fr Sa |
|             | d    | 0 1 ... 5 6 |
| Hour | HH | 00 01 ... 22 23 |
|      | H  | 0 1 ... 22 23 |
|      | hh | 01 02 ... 11 12 |
|      | h  | 1 2 ... 11 12 |
| Minute | mm | 00 01 ... 58 59 |
|        | m  | 0 1 ... 58 59 |
| Second | ss | 00 01 ... 58 59 |
|        | s  | 0 1 ... 58 59 |
| Fractional Second | SSS | 000 001 ... 998 999 |
|                   | SS  | 00 01 ... 98 99 |
|                   | S   | 0 1 ... 8 9 |
| Timezone | ZZ | -0700 -0600 ... +0600 +0700 |
|          | Z  | -07:00 -06:00 ... +06:00 +07:00 |
| AM/PM | A | AM PM |
|       | a | am pm |
*/
let formatFlags = Object.assign(Object.create(null), {
    YYYY: (date) => String(date.getFullYear()),
    YY: (date) => formatFlags.YYYY(date).slice(-2),
    MMMM: (date, i18n) => i18n.months[date.getMonth()],
    MMM: (date, i18n) => i18n.monthsShort[date.getMonth()],
    MM: (date) => formatFlags.M(date).padStart(2, '0'),
    M: (date) => String(date.getMonth() + 1),
    Mo: (date, i18n) => i18n.ordinal(formatFlags.M(date)),
    DD: (date) => formatFlags.D(date).padStart(2, '0'),
    D: (date) => String(date.getDate()),
    Do: (date, i18n) => i18n.ordinal(formatFlags.D(date)),
    dddd: (date, i18n) => i18n.weekdays[date.getDay()],
    ddd: (date, i18n) => i18n.weekdaysShort[date.getDay()],
    dd: (date, i18n) => i18n.weekdaysMin[date.getDay()],
    d: (date) => String(date.getDay()),
    HH: (date) => formatFlags.H(date).padStart(2, '0'),
    H: (date) => String(date.getHours()),
    hh: (date) => formatFlags.h(date).padStart(2, '0'),
    h: (date) => String(date.getHours() % 12 || 12),
    mm: (date) => formatFlags.m(date).padStart(2, '0'),
    m: (date) => String(date.getMinutes()),
    ss: (date) => formatFlags.s(date).padStart(2, '0'),
    s: (date) => String(date.getSeconds()),
    SSS: (date) => String(date.getMilliseconds()).padStart(3, '0'),
    SS: (date) => String(Math.round(date.getMilliseconds() / 10)).padStart(2, '0'),
    S: (date) => String(Math.round(date.getMilliseconds() / 100)),
    ZZ: (date) => formatFlags.Z(date).replace(':', ''),
    Z: (date) => {
        let offset = date.getTimezoneOffset();
        let o = Math.abs(offset);
        return ((offset > 0) ? '-' : '+') + String(Math.floor(o / 60)).padStart(2, '0') + ':' + String(o % 60).padStart(2, '0');
    },
    A: (date, i18n) => ((date.getHours() < 12) ? i18n.ampm[0] : i18n.ampm[1]).toUpperCase(),
    a: (date, i18n) => ((date.getHours() < 12) ? i18n.ampm[0] : i18n.ampm[1]).toLowerCase(),
});

/**
 * Formats a date using a custom mask template.
 *
 * @param {(Date|DateLike)} date A date.
 * @param {string} [mask='YYYY-MM-DD'] A mask.
 * @param {(string|Object)} [i18n='en'] A locales abbreviation or locale object.
 * @returns {string} The formatted date.
 */
let format = (date, mask = 'YYYY-MM-DD', i18n = 'en') => {
    date = from(date);
    if (typeof i18n === 'string')
      i18n = locales.get(i18n);
    
    let literals = [];
    return mask
      .replace(literal, ($0, $1) => { literals.push($1); return '??'; })
      .replace(token, ($0) => ($0 in formatFlags) ? formatFlags[$0](date, i18n) : $0.slice(1, -1))
      .replace(/\?\?/g, () => literals.shift());
};


module.exports = format;