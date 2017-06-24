let test = require('tape');

let remove = require('../src/Array/remove');


test('Array.remove', (t) => {
    t.deepEqual(remove([], () => true), []);
    t.deepEqual(remove([1, 2, 3, 4], () => false), [1, 2, 3, 4]);
    t.deepEqual(remove([1, 2, 3, 4], (val) => val % 2 !== 0), [2, 4]);
    t.deepEqual(remove([1, 2, 3, 4], (val, index) => index < 2), [3, 4]);
    
    t.end();
});