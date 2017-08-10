let test = require('tape');

let inRange = require('../src/Number/inRange');


test('Number#inRange', (t) => {
    t.equal(inRange(4, 2, 7), true);
    t.equal(inRange(4, 4, 7), true);
    t.equal(inRange(4, 2, 4), true);
    t.equal(inRange(4, 4), true);
    t.equal(inRange(4, 2, 3), false);
    t.equal(inRange(4, 3), false);
    
    t.end();
});