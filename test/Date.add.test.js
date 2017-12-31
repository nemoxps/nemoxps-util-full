let test = require('tape');

let add = require('../src/Date/add');


test('Date#add', (t) => {
    let fn = add;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.throws = (args, msg) => {
        t.throws(() => { fn(...args); }, msg);
    };
    
    let date = new Date(2001, 3, 5, 6, 7, 8, 9);
    
    tt([date, 0, 'years'], date);
    tt([date, 1, 'year'], new Date(2002, 3, 5, 6, 7, 8, 9));
    tt([date, 1, 'month'], new Date(2001, 4, 5, 6, 7, 8, 9));
    tt([date, 1, 'day'], new Date(2001, 3, 6, 6, 7, 8, 9));
    tt([date, 1, 'week'], new Date(2001, 3, 12, 6, 7, 8, 9));
    tt([date, 1, 'hour'], new Date(2001, 3, 5, 7, 7, 8, 9));
    tt([date, 1, 'minute'], new Date(2001, 3, 5, 6, 8, 8, 9));
    tt([date, 1, 'second'], new Date(2001, 3, 5, 6, 7, 9, 9));
    tt([date, 1, 'millisecond'], new Date(2001, 3, 5, 6, 7, 8, 10));
    tt([date, 10, 'days'], new Date(2001, 3, 15, 6, 7, 8, 9));
    tt([date, -4, 'days'], new Date(2001, 3, 1, 6, 7, 8, 9));
    
    tt.throws([date, 0, 'date']);
    
    t.end();
});