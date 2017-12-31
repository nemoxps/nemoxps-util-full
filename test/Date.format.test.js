let test = require('tape');

let format = require('../src/Date/format');


test('Date#format', (t) => {
    let fn = format;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    tt.default = (args, defaultArgs, msg) => {
        t.equal(fn(...args), fn(...defaultArgs), msg);
    };
    tt.regexp = (args, reg, msg) => {
        t.equal(reg.test(fn(...args)), true, msg);
    };
    
    let date = (() => {
        let date = new Date(2001, 3, 5, 6, 7, 8, 9);
        for (let prop of Object.getOwnPropertyNames(Date.prototype))
          if (prop.startsWith('set'))
            date[prop] = (...args) => new Date(new Date(date)[prop](...args));
        return date;
    })();
    
    tt.default([date], [date, 'YYYY-MM-DD', 'en']);
    
    tt([date, 'YYYY'], '2001');
    tt([date, 'YY'], '01');
    
    tt([date, 'MMMM'], 'April');
    tt([date, 'MMM'], 'Apr');
    tt([date, 'MM'], '04');
    tt([date, 'M'], '4');
    tt([date, 'Mo'], '4th');
    
    tt([date, 'DD'], '05');
    tt([date, 'D'], '5');
    tt([date, 'Do'], '5th');
    tt([date.setDate(1), 'Do'], '1st');
    tt([date.setDate(2), 'Do'], '2nd');
    tt([date.setDate(3), 'Do'], '3rd');
    tt([date.setDate(4), 'Do'], '4th');
    tt([date.setDate(10), 'Do'], '10th');
    tt([date.setDate(11), 'Do'], '11th');
    tt([date.setDate(12), 'Do'], '12th');
    tt([date.setDate(13), 'Do'], '13th');
    tt([date.setDate(14), 'Do'], '14th');
    tt([date.setDate(20), 'Do'], '20th');
    tt([date.setDate(21), 'Do'], '21st');
    tt([date.setDate(22), 'Do'], '22nd');
    tt([date.setDate(23), 'Do'], '23rd');
    tt([date.setDate(24), 'Do'], '24th');
    
    tt([date.setDate(15), 'dddd'], 'Sunday');
    tt([date.setDate(15), 'ddd'], 'Sun');
    tt([date.setDate(15), 'dd'], 'Su');
    tt([date.setDate(15), 'd'], '0');
    
    tt([date, 'HH'], '06');
    tt([date, 'H'], '6');
    tt([date.setHours(18), 'HH'], '18');
    tt([date.setHours(18), 'H'], '18');
    tt([date, 'hh'], '06');
    tt([date, 'h'], '6');
    tt([date.setHours(18), 'hh'], '06');
    tt([date.setHours(18), 'h'], '6');
    tt([date.setHours(0), 'h'], '12');
    tt([date.setHours(12), 'h'], '12');
    
    tt([date, 'mm'], '07');
    tt([date, 'm'], '7');
    
    tt([date, 'ss'], '08');
    tt([date, 's'], '8');
    
    tt([date, 'SSS'], '009');
    tt([date, 'SS'], '01');
    tt([date, 'S'], '0');
    
    tt.regexp([date, 'ZZ'], /^[+-]\d{4}$/);
    tt.regexp([date, 'Z'], /^[+-]\d{2}:\d{2}$/);
    
    tt([date, 'A'], 'AM');
    tt([date.setHours(18), 'A'], 'PM');
    tt([date, 'a'], 'am');
    tt([date.setHours(18), 'a'], 'pm');
    
    tt([date, 'YYYY-MM-DD HH:mm:ss.SSS'], '2001-04-05 06:07:08.009');
    tt([date, 'MM/DD/YYYY HH:mm:ss.SSS'], '04/05/2001 06:07:08.009');
    tt([date, 'DD.MM.YYYY HH:mm:ss.SSS'], '05.04.2001 06:07:08.009');
    tt([date, 'YYYYMMDD'], '20010405');
    tt([date, 'MMMM D, YYYY'], 'April 5, 2001');
    tt([date, 'Do MMMM, h A'], '5th April, 6 AM');
    tt([date, 'M MMM MM MMMM'], '4 Apr 04 April');
    
    tt([date, '[on] MM/DD/YYYY [at] HH:mm'], 'on 04/05/2001 at 06:07');
    tt([date, '"on" MM/DD/YYYY "at" HH:mm'], 'on 04/05/2001 at 06:07');
    tt([date, '\'on\' MM/DD/YYYY \'at\' HH:mm'], 'on 04/05/2001 at 06:07');
    tt([date, '[] MM/DD/YYYY [] HH:mm'], ' 04/05/2001  06:07');
    tt([date, '"" MM/DD/YYYY "" HH:mm'], ' 04/05/2001  06:07');
    tt([date, '\'\' MM/DD/YYYY \'\' HH:mm'], ' 04/05/2001  06:07');
    tt([date, '[YY]'], 'YY');
    tt([date, '[YY'], '[01');
    tt([date, '[[YY]]'], '[YY]');
    tt([date, '[[]'], '[');
    tt([date, 'YYYY[\n]MM[\n]DD[\n]'], '2001\n04\n05\n');
    
    t.end();
});