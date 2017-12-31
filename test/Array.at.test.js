let test = require('tape');

let at = require('../src/Array/at');


test('Array#at', (t) => {
    let fn = at;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    
    let arr = [1, 2, 3, 4];
    let l = arr.length;
    
    tt([[], 0], undefined);
    tt([arr, 0], arr[0]);
    tt([arr, 1], arr[1]);
    tt([arr, -1], arr[l - 1]);
    
    t.end();
});