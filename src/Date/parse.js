let regexpspecialchars = require('../String/regexpspecialchars');
let locales = require('./locales');


let token = /Y{2}(?:Y{2})?|Mo|M{1,4}|Do|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|Z{1,2}|[Aa]|"[^"]*"|'[^']*'/g;

/*
|    | Token | Input |
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
| AM/PM | A|a | AM PM am pm |
*/
let parseFlags = (() => {
    let parseFlags = Object.create(null);
    let alias = (flag) => parseFlags[flag];
    let aliasFn = (expr, flag) => [expr, parseFlags[flag][1]];
    let oneOrTwoDigits = '\\d{1,2}';
    let oneDigit = '\\d';
    let twoDigits = '\\d{2}';
    let threeDigits = '\\d{3}';
    let fourDigits = '\\d{4}';
    let word = '[^\\s]+';
    let updateKey = (dKey, transform) => (d, $0) => {
        d[dKey] = Number((transform) ? transform($0) : $0);
    };
    let updateKeyWithI18n = (dKey, i18nKey) => (d, $0, i18n) => {
        let index = i18n[i18nKey].indexOf($0[0].toUpperCase() + $0.slice(1).toLowerCase());
        if (index !== -1)
          d[dKey] = index;
        else
          d.invalid = true;
    };
    
    parseFlags.YYYY = [fourDigits, updateKey('year')];
    parseFlags.YY = [twoDigits, (d, $0) => {
        let now = new Date();
        let century = String(now.getFullYear()).slice(0, -2);
        d.year = Number((($0 > 68) ? century - 1 : century) + $0);
    }];
    parseFlags.MMMM = [word, updateKeyWithI18n('month', 'months')];
    parseFlags.MMM = [word, updateKeyWithI18n('month', 'monthsShort')];
    parseFlags.MM = [twoDigits, updateKey('month', ($0) => $0 - 1)];
    parseFlags.M = aliasFn(oneOrTwoDigits, 'MM');
    parseFlags.Mo = [oneOrTwoDigits + word, updateKey('month', ($0) => Number.parseInt($0, 10) - 1)];
    parseFlags.DD = [twoDigits, updateKey('date')];
    parseFlags.D = aliasFn(oneOrTwoDigits, 'DD');
    parseFlags.Do = [oneOrTwoDigits + word, updateKey('date', ($0) => Number.parseInt($0, 10))];
    parseFlags.dddd = [word, updateKeyWithI18n('day', 'weekdays')];
    parseFlags.ddd = [word, updateKeyWithI18n('day', 'weekdaysShort')];
    parseFlags.dd = [word, updateKeyWithI18n('day', 'weekdaysMin')];
    parseFlags.d = [oneDigit, updateKey('day')];
    parseFlags.HH = [twoDigits, updateKey('hours')];
    parseFlags.H = aliasFn(oneOrTwoDigits, 'HH');
    parseFlags.hh = alias('HH');
    parseFlags.h = alias('H');
    parseFlags.mm = [twoDigits, updateKey('minutes')];
    parseFlags.m = aliasFn(oneOrTwoDigits, 'mm');
    parseFlags.ss = [twoDigits, updateKey('seconds')];
    parseFlags.s = aliasFn(oneOrTwoDigits, 'ss');
    parseFlags.SSS = [threeDigits, updateKey('milliseconds')];
    parseFlags.SS = [twoDigits, updateKey('milliseconds', ($0) => $0 * 10)];
    parseFlags.S = [oneDigit, updateKey('milliseconds', ($0) => $0 * 100)];
    parseFlags.ZZ = ['[^\\s]*?[+-]\\d{4}|[^\\s]*?Z', (d, $0) => {
        if ($0.slice(-1) === 'Z')
          $0 = '+0000';
        let [sign, hours, minutes] = $0.match(/([+-]|\d{2})/g);
        let offset = Number(hours) * 60 + Number(minutes);
        d.timezoneOffset = (sign === '+') ? offset : -offset;
    }];
    parseFlags.Z = aliasFn('[^\\s]*?[+-]\\d{2}:\\d{2}|[^\\s]*?Z', 'ZZ');
    parseFlags.A = [word, (d, $0, i18n) => {
        let str = $0.toLowerCase();
        if (str === i18n.ampm[0].toLowerCase())
          d.isPm = false;
        else if (str === i18n.ampm[1].toLowerCase())
          d.isPm = true;
        else
          d.invalid = true;
    }];
    parseFlags.a = alias('A');
    
    return parseFlags;
})();

let _parse = (dateStr, format, i18n) => {
    let parseInfo = [];
    let matches = dateStr.match(new RegExp(regexpspecialchars(format).replace(token, ($0) => {
        if ($0 in parseFlags)
        {
          let [expression, info] = parseFlags[$0];
          parseInfo.push(info);
          return `(${expression})`;
        }
        return $0.slice(1, -1);
    })));
    if (!matches)
      return null;
    
    let dateInfo = {
        year: new Date().getFullYear(),
        month: 0,
        date: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        isPm: undefined,
        timezoneOffset: undefined,
    };
    for (let i = 1, l = matches.length; i < l; i++)
      parseInfo[i - 1](dateInfo, matches[i], i18n);
    if (dateInfo.invalid)
      return null;
    if (dateInfo.isPm === true && dateInfo.hours !== 12)
      dateInfo.hours += 12;
    else if (dateInfo.isPm === false && dateInfo.hours === 12)
      dateInfo.hours = 0;
    
    let date;
    let getDateParts = () => [dateInfo.year, dateInfo.month, dateInfo.date, dateInfo.hours, dateInfo.minutes, dateInfo.seconds, dateInfo.milliseconds];
    if (dateInfo.timezoneOffset !== undefined)
    {
      dateInfo.minutes -= dateInfo.timezoneOffset;
      date = new Date(Date.UTC(...getDateParts()));
    }
    else
      date = new Date(...getDateParts());
    return date;
};
/**
 * Parses a date string using a custom format.
 *
 * @param {string} dateStr A date.
 * @param {(string|string[])} [formats] A format or a list of possible formats.
 * @param {(string|Object)} [i18n='en'] A locales abbreviation or locale object.
 * @returns {Date} A date.
 */
let parse = (dateStr, formats = ['YYYY-MM-DD"T"HH:mm:ss', 'YYYY-MM-DD"T"HH:mm', 'YYYY-MM-DD', 'YYYYMMDD"T"HHmmss', 'YYYYMMDD"T"HHmm', 'YYYYMMDD'], i18n = 'en') => {
    if (typeof i18n === 'string')
      i18n = locales.get(i18n);
    
    if (typeof formats === 'string')
      return _parse(dateStr, formats, i18n);
    for (let format of formats)
    {
      let date = _parse(dateStr, format, i18n);
      if (date !== null)
        return date;
    }
    return null;
};


module.exports = parse;