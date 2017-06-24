let test = require('tape');

let floor = require('../src/Math/floor');


test('Math.floor', (t) => {
    t.equal(floor(55.55), Math.floor(55.55));
    t.equal(floor(59, 1), 50);
    t.equal(floor(55.59, -1), 55.5);
    t.equal(floor(-51, 1), -60);
    t.equal(floor(-55.51, -1), -55.6);
    
    t.end();
});