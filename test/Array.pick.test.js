let test = require('tape');

let pick = require('../src/Array/pick');


test('Array#pick', (t) => {
    let fn = pick;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    
    let arr = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    
    tt([arr, 0], ['abc']);
    tt([arr, 0, 2, -1, 3], ['abc', 'bac', 'cba', 'bca']);
    
    t.end();
});