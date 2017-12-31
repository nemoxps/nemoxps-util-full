let test = require('tape');

let flagGenerator = require('../src/flagGenerator');


test('flagGenerator', (t) => {
    let fn = flagGenerator;
    let collect = (iterator, n) => Array(n).fill(null).map(() => iterator.next().value);
    let tt = (amount, expected, msg) => {
        t.deepEqual(collect(fn(), amount), expected, msg);
    };
    
    tt(4, [1, 2, 4, 8]);
    tt(7, [1, 2, 4, 8, 16, 32, 64]);
    
    t.test('flagGenerator.for', (t) => {
        let fn = flagGenerator.for;
        let tt = (args, expected, msg) => {
            t.deepEqual(fn(...args), expected, msg);
        };
        
        tt(['FLAG1', 'FLAG2', 'FLAG3', 'FLAG4'], { FLAG1: 1, FLAG2: 2, FLAG3: 4, FLAG4: 8 });
        
        t.end();
    });
    
    t.end();
});