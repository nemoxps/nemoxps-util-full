let test = require('tape');

let flatten = require('../src/Array/flatten');


test('Array#flatten', (t) => {
    let arr = [1, [21, 22], 3, [41, [421, [4221], 423]], 5];
    
    t.deepEqual(flatten(arr, 0), arr);
    t.deepEqual(flatten(arr, false), arr);
    t.deepEqual(flatten(arr), [1, 21, 22, 3, 41, [421, [4221], 423], 5]);
    t.deepEqual(flatten(arr, 1), [1, 21, 22, 3, 41, [421, [4221], 423], 5]);
    t.deepEqual(flatten(arr, 2), [1, 21, 22, 3, 41, 421, [4221], 423, 5]);
    t.deepEqual(flatten(arr, 3), [1, 21, 22, 3, 41, 421, 4221, 423, 5]);
    t.deepEqual(flatten(arr, true), [1, 21, 22, 3, 41, 421, 4221, 423, 5]);
    t.throws(() => { flatten(arr, -1); });
    
    t.end();
});