let test = require('tape');

let leapDaysBetween = require('../src/Date/leapDaysBetween');


test('Date.leapDaysBetween', (t) => {
    let fn = leapDaysBetween;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    
    tt([new Date(1992, 0), new Date(2016, 3)], 7);
    tt([new Date(2016, 3), new Date(1992, 0)], 7);
    tt([new Date(1992, 1, 29), new Date(2016, 3)], 7);
    tt([new Date(1992, 2), new Date(2016, 3)], 6);
    tt([new Date(1992, 0), new Date(2016, 0)], 6);
    tt([new Date(1992, 0), new Date(2016, 1)], 6);
    tt([new Date(1992, 0), new Date(2016, 1, 29)], 7);
    tt([new Date(1992, 0), new Date(2016, 2)], 7);
    tt([new Date(1992, 2), new Date(2016, 1, 28)], 5);
    
    t.end();
});