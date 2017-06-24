let test = require('tape');

let insertBetween = require('../src/Array/insertBetween');


test('Array.insertBetween', (t) => {
    t.deepEqual(insertBetween([], '-'), []);
    t.deepEqual(insertBetween([1], '-'), [1]);
    t.deepEqual(insertBetween([1, 2], '-'), [1, '-', 2]);
    t.deepEqual(insertBetween([1, 2, 3], '-'), [1, '-', 2, '-', 3]);
    
    t.end();
});