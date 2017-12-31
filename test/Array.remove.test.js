let test = require('tape');

let remove = require('../src/Array/remove');


test('Array#remove', (t) => {
    let fn = remove;
    let tt = (v, arg, expected, expected2, msg) => {
        t.deepEqual(fn(v, arg), expected, msg);
        t.deepEqual(v, expected2, msg);
    };
    
    tt([], () => true, [], []);
    tt([1, 2, 3, 4], () => false, [], [1, 2, 3, 4]);
    tt([1, 2, 3, 4], (val) => val % 2 === 0, [2, 4], [1, 3]);
    tt([1, 2, 3, 4], (val, index) => index % 2 === 0, [1, 3], [2, 4]);
    
    t.end();
});