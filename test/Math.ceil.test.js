let test = require('tape');

let ceil = require('../src/Math/ceil');


test('Math.ceil', (t) => {
    t.equal(ceil(55.55), Math.ceil(55.55));
    t.equal(ceil(51, 1), 60);
    t.equal(ceil(55.51, -1), 55.6);
    t.equal(ceil(-59, 1), -50);
    t.equal(ceil(-55.59, -1), -55.5);
    
    t.end();
});