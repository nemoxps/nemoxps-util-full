let test = require('tape');

let unique = require('../src/Array/unique');


test('Array#unique', (t) => {
    let fn = unique;
    let tt = (arg, expected, msg) => {
        t.deepEqual(fn(arg), expected, msg);
    };
    
    tt([], []);
    tt([1, 2, 3, 4], [1, 2, 3, 4]);
    tt([1, 2, 3, 4, 2, 3, 4, 3, 4, 4], [1, 2, 3, 4]);
    let arr = [{ abc: 'abc' }, { abc: 'abc' }];
    tt(arr, arr);
    arr.push(arr[0]);
    tt(arr, arr.slice(0, 2));
    
    t.end();
});