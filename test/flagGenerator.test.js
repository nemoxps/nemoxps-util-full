let test = require('tape');

let flagGenerator = require('../src/flagGenerator');


test('flagGenerator', (t) => {
    let collect = (iterator, n) => {
        let r = [];
        for (let i = 0; i < n; i++)
          r.push(iterator.next().value);
        return r;
    };
    
    t.deepEqual(collect(flagGenerator(), 4), [1, 2, 4, 8]);
    t.deepEqual(collect(flagGenerator(), 7), [1, 2, 4, 8, 16, 32, 64]);
    
    t.end();
});