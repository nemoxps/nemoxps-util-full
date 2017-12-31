let test = require('tape');

let filterIndex = require('../src/Array/filterIndex');


test('Array#filterIndex', (t) => {
    let fn = filterIndex;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    
    let arr = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    
    tt([[], () => true], []);
    tt([arr, () => false], []);
    tt([arr, (val) => val.endsWith('c')], [0, 2]);
    tt([arr, (val, index) => index % 2 === 0], [0, 2, 4]);
    
    t.end();
});