let test = require('tape');

let inRange = require('../src/Date/inRange');


test('Date#inRange', (t) => {
    let fn = inRange;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    
    let date = new Date(2010, 3, 20);
    tt([date, new Date(2000, 3, 20), new Date(2020, 3, 20)], true);
    tt([date, new Date(2020, 3, 20), new Date(2000, 3, 20)], true);
    tt([date, new Date(2010, 3, 20), new Date(2020, 3, 20)], true);
    tt([date, new Date(2000, 3, 20), new Date(2010, 3, 20)], true);
    tt([date, new Date(2010, 3, 21), new Date(2020, 3, 20)], false);
    tt([date, new Date(2010, 4, 20), new Date(2020, 3, 20)], false);
    tt([date, new Date(2011, 3, 20), new Date(2020, 3, 20)], false);
    tt([date, new Date(2000, 3, 20), new Date(2010, 3, 19)], false);
    tt([date, new Date(2000, 3, 20), new Date(2010, 2, 20)], false);
    tt([date, new Date(2000, 3, 20), new Date(2009, 3, 20)], false);
    
    t.end();
});