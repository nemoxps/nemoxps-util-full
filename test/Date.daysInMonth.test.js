let test = require('tape');

let daysInMonth = require('../src/Date/daysInMonth');


test('Date.daysInMonth', (t) => {
    let fn = daysInMonth;
    let tt = (v, expected, msg) => {
        t.deepEqual(Array(12).fill(null).map((n, i) => fn(v, i)), expected, msg);
    };
    
    tt(1990, [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    tt(1992, [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    
    t.end();
});