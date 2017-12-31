let test = require('tape');

let pickNot = require('../src/Array/pickNot');


test('Array#pickNot', (t) => {
    let fn = pickNot;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    
    let arr = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    
    tt([arr, 0], ['acb', 'bac', 'bca', 'cab', 'cba']);
    tt([arr, 0, 2, -1, 3], ['acb', 'cab']);
    
    t.end();
});