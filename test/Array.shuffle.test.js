let test = require('tape');

let shuffle = require('../src/Array/shuffle');


test('Array#shuffle', (t) => {
    t.doesNotThrow(() => {
        shuffle([]);
        shuffle([1]);
        let arr = [1, 2, 3, 4, 5];
        for (let i = 0, l = 1e2; i < l; i++)
          arr = shuffle(arr);
    });
    
    t.end();
});