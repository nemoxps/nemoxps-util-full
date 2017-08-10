let test = require('tape');

let shuffle = require('../src/Array/shuffle');


test('Array#shuffle', (t) => {
    t.doesNotThrow(() => { shuffle([1, 2, 3, 4]); });
    
    t.end();
});