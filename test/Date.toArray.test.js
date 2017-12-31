let test = require('tape');

let toArray = require('../src/Date/toArray');


test('Date#toArray', (t) => {
    let fn = toArray;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.default = (args, defaultArgs, msg) => {
        t.deepEqual(fn(...args), fn(...defaultArgs), msg);
    };
    
    let d = [2001, 3, 5, 6, 7, 8, 9];
    let date = new Date(...d);
    
    tt.default([date], [date, 3]);
    
    tt([date, 0], []);
    tt([date, 1], d.slice(0, 1));
    tt([date, 2], d.slice(0, 2));
    tt([date, 3], d.slice(0, 3));
    tt([date, 4], d.slice(0, 4));
    tt([date, 5], d.slice(0, 5));
    tt([date, 6], d.slice(0, 6));
    tt([date, 7], d);
    tt([date, 8], d);
    
    t.end();
});