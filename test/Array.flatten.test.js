let test = require('tape');

let flatten = require('../src/Array/flatten');


test('Array#flatten', (t) => {
    let fn = flatten;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.default = (args, defaultArgs, msg) => {
        t.deepEqual(fn(...args), fn(...defaultArgs), msg);
    };
    tt.throws = (args, msg) => {
        t.throws(() => { fn(...args); }, msg);
    };
    
    let arr = [1, [21, 22], 3, [41, [421, [4221], 423]], 5];
    
    tt.default([arr], [arr, 1]);
    
    tt([arr, 0], arr);
    tt([arr, false], arr);
    tt([arr, 1], [1, 21, 22, 3, 41, [421, [4221], 423], 5]);
    tt([arr, 2], [1, 21, 22, 3, 41, 421, [4221], 423, 5]);
    tt([arr, 3], [1, 21, 22, 3, 41, 421, 4221, 423, 5]);
    tt([arr, true], [1, 21, 22, 3, 41, 421, 4221, 423, 5]);
    
    tt.throws([arr, -1]);
    
    t.end();
});