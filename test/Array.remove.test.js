let test = require('tape');

let remove = require('../src/Array/remove');


test('Array#remove', (t) => {
    let arr = [];
    t.deepEqual(remove(arr, () => true), []);
    t.deepEqual(arr, []);
    
    arr = [1, 2, 3, 4];
    t.deepEqual(remove(arr, () => false), []);
    t.deepEqual(arr, [1, 2, 3, 4]);
    
    arr = [1, 2, 3, 4];
    t.deepEqual(remove(arr, (val) => val % 2 === 0), [2, 4]);
    t.deepEqual(arr, [1, 3]);
    
    arr = [1, 2, 3, 4];
    t.deepEqual(remove(arr, (val, index) => index % 2 === 0), [1, 3]);
    t.deepEqual(arr, [2, 4]);
    
    t.end();
});