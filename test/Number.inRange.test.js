let test = require('tape');

let inRange = require('../src/Number/inRange');


test('Number#inRange', (t) => {
    let fn = inRange;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    tt.default = (args, defaultArgs, msg) => {
        tt(args, fn(...defaultArgs), msg);
    };
    
    tt.default([4, 4], [4, 0, 4]);
    
    tt([4, 2, 7], true);
    tt([4, 7, 2], true);
    tt([4, 4, 7], true);
    tt([4, 2, 4], true);
    tt([4, 4], true);
    tt([4, 2, 3], false);
    tt([4, 3], false);
    
    t.end();
});