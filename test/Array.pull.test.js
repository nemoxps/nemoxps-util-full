let test = require('tape');

let pull = require('../src/Array/pull');


test('Array#pull', (t) => {
    let arr = [];
    t.deepEqual(pull(arr, 0), []);
    t.deepEqual(arr, []);
    
    arr = [1, 2, 3];
    t.deepEqual(pull(arr, 0), []);
    t.deepEqual(arr, [1, 2, 3]);
    
    arr = [1, 2, 3];
    t.deepEqual(pull(arr, 1), [1]);
    t.deepEqual(arr, [2, 3]);
    
    arr = [1, 2, 3];
    t.deepEqual(pull(arr, 1, 2), [1, 2]);
    t.deepEqual(arr, [3]);
    
    arr = [1, 2, 1, 3];
    t.deepEqual(pull(arr, 1), [1, 1]);
    t.deepEqual(arr, [2, 3]);
    
    arr = [1, 2, 3, 2, 1];
    t.deepEqual(pull(arr, 1, 2), [1, 1, 2, 2]);
    t.deepEqual(arr, [3]);
    
    t.end();
});