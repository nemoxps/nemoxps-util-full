let test = require('tape');

let pull = require('../src/Array/pull');


test('Array#pull', (t) => {
    let fn = pull;
    let tt = (v, args, expected, expected2, msg) => {
        t.deepEqual(fn(v, ...args), expected, msg);
        t.deepEqual(v, expected2, msg);
    };
    
    tt([], [0], [], []);
    tt([1, 2, 3], [0], [], [1, 2, 3]);
    tt([1, 2, 3], [1], [1], [2, 3]);
    tt([1, 2, 3], [1, 2], [1, 2], [3]);
    tt([1, 2, 1, 3], [1], [1, 1], [2, 3]);
    tt([1, 2, 3, 2, 1], [1, 2], [1, 1, 2, 2], [3]);
    
    t.end();
});