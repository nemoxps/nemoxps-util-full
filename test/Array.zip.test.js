let test = require('tape');

let zip = require('../src/Array/zip');


test('Array#zip', (t) => {
    let fn = zip;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    
    tt([[]], []);
    tt([[1, 2, 3]], [[1], [2], [3]]);
    tt([[1, 2, 3], ['1', '2', '3']], [[1, '1'], [2, '2'], [3, '3']]);
    tt([[1, 2], ['1', '2', '3']], [[1, '1'], [2, '2'], [undefined, '3']]);
    
    t.end();
});