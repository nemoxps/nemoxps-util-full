let test = require('tape');

let birthdays = require('../src/Date/birthdays');


test('Date.birthdays', (t) => {
    let fn = birthdays;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    
    let bds = [
        new Date(2000, 3, 10), // 0
        new Date(2000, 3, 15), // 1
        new Date(2000, 3, 20), // 2
        new Date(2000, 3, 25), // 3
        new Date(2000, 3, 30), // 4
        new Date(2000, 4, 5), // 5
        new Date(2000, 4, 6), // 6
        new Date(2000, 4, 15), // 7
        new Date(2000, 4, 16), // 8
        new Date(2000, 5, 16), // 9
    ];
    let now = new Date(2017, 3, 15);
    
    tt([bds, -5, 'days', now], [0, 1]);
    tt([bds, -1, 'day', now], [1]);
    tt([bds, 0, 'days', now], [1]);
    tt([bds, 1, 'day', now], [1]);
    tt([bds, 5, 'days', now], [1, 2]);
    tt([bds, 20, 'days', now], [1, 2, 3, 4, 5]);
    tt([bds, 1, 'week', now], [1, 2]);
    tt([bds, 3, 'weeks', now], [1, 2, 3, 4, 5, 6]);
    tt([bds, 1, 'month', now], [1, 2, 3, 4, 5, 6, 7]);
    tt([bds, 2, 'months', now], [1, 2, 3, 4, 5, 6, 7, 8]);
    tt([bds, 3, 'months', now], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    
    t.end();
});