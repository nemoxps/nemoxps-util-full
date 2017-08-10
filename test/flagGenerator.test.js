let test = require('tape');

let flagGenerator = require('../src/flagGenerator');


test('flagGenerator', (t) => {
    let collect = (iterator, n) => Array(n).fill(null).map(() => iterator.next().value);
    
    t.deepEqual(collect(flagGenerator(), 4), [1, 2, 4, 8]);
    t.deepEqual(collect(flagGenerator(), 7), [1, 2, 4, 8, 16, 32, 64]);
    
    t.deepEqual(flagGenerator.for('FLAG1', 'FLAG2', 'FLAG3', 'FLAG4'), {
        FLAG1: 1,
        FLAG2: 2,
        FLAG3: 4,
        FLAG4: 8,
    });
    
    t.end();
});