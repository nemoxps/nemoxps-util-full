let test = require('tape');

let chunk = require('../src/Array/chunk');


test('Array#chunk', (t) => {
    let fn = chunk;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.throws = (args, msg) => {
        t.throws(() => { fn(...args); }, msg);
    };
    
    let arr = [1, 2, 3, 4, 5];
    
    tt([arr, 1], [[arr[0]], [arr[1]], [arr[2]], [arr[3]], [arr[4]]]);
    tt([arr, 2], [arr.slice(0, 2), arr.slice(2, 4), arr.slice(4, 6)]);
    
    tt.throws([arr, 0]);
    
    t.end();
});