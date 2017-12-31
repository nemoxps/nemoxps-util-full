let test = require('tape');

let insertBetween = require('../src/Array/insertBetween');


test('Array#insertBetween', (t) => {
    let fn = insertBetween;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    
    tt([[], '-'], []);
    tt([[1], '-'], [1]);
    tt([[1, 2], '-'], [1, '-', 2]);
    tt([[1, 2, 3], '-'], [1, '-', 2, '-', 3]);
    
    t.end();
});