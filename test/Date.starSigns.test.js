let test = require('tape');

let { getStarSign } = require('../src/Date/starSigns');


test('Date.starSigns.getStarSign', (t) => {
    let fn = getStarSign;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args).name, expected, msg);
    };
    tt.default = (args, defaultArgs, msg) => {
        t.deepEqual(fn(...args), fn(...defaultArgs), msg);
    };
    tt.symbol = (args, expected, msg) => {
        t.equal(fn(...args).symbol, expected, msg);
    };
    
    let date = new Date(2000, 3, 20);
    
    tt.default([date], [date, 'en']);
    
    tt([date, 'en'], 'Aries');
    tt([date, 'de'], 'Widder');
    
    tt.symbol([new Date(2000, 3, 15)], '♈');
    tt.symbol([new Date(2000, 2, 21)], '♈');
    tt.symbol([new Date(2000, 3, 20)], '♈');
    tt.symbol([new Date(2000, 2, 20)], '♓');
    tt.symbol([new Date(2000, 3, 21)], '♉');
    
    t.end();
});