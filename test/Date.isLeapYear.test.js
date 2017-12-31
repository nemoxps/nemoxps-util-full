let test = require('tape');

let isLeapYear = require('../src/Date/isLeapYear');


test('Date.isLeapYear', (t) => {
    let fn = isLeapYear;
    let tt = (arg, expected, msg) => {
        t.equal(fn(arg), expected, msg);
    };
    
    tt(1990, false);
    tt(1992, true);
    tt(2000, true);
    tt(2100, false);
    
    t.end();
});