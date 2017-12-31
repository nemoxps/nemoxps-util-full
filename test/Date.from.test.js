let test = require('tape');

let from = require('../src/Date/from');


test('Date.from', (t) => {
    let fn = from;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    
    let d = [2001, 3, 5, 6, 7, 8, 9];
    let date = new Date(...d.slice(0, 3));
    let date2 = new Date(...d);
    
    tt([date], date);
    
    tt(['2001-04-05', 'YYYY-MM-DD'], date);
    tt([['2001-04-05', 'YYYY-MM-DD']], date);
    
    let time = Date.now();
    tt([time], new Date(time));
    
    tt([d], date2);
    tt([d.slice(0, 2)], new Date(...d.slice(0, 2), 1));
    tt([d.slice(0, 1)], new Date(...d.slice(0, 1), 0, 1));
    
    t.end();
});