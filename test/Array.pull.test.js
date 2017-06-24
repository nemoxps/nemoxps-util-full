let test = require('tape');

let pull = require('../src/Array/pull');


test('Array.pull', (t) => {
    t.deepEqual(pull([], 0), []);
    t.deepEqual(pull([1, 2, 3], 0), [1, 2, 3]);
    t.deepEqual(pull([1, 2, 3], 1), [2, 3]);
    t.deepEqual(pull([1, 2, 1, 3], 1), [2, 3]);
    t.deepEqual(pull([1, 2, 3], 1, 2), [3]);
    t.deepEqual(pull([1, 2, 3, 2, 1], 1, 2), [3]);
    
    t.end();
});