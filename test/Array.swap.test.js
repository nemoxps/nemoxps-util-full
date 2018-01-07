let test = require('tape');

let swap = require('../src/Array/swap');


test('Array#swap', (t) => {
    let fn = swap;
    let tt = (v, args, expected, msg) => {
        fn(v, ...args);
        t.deepEqual(v, expected, msg);
    };
    
    tt([], [0, 1], [undefined, undefined]);
    tt([1, 2, 3, 4], [1, 1], [1, 2, 3, 4]);
    tt([1, 2, 3, 4], [1, 3], [1, 4, 3, 2]);
    
    t.end();
});