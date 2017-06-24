let test = require('tape');

let round = require('../src/Math/round');


test('Math.round', (t) => {
    t.equal(round(55.55), Math.round(55.55));
    t.equal(round(55, 1), 60);
    t.equal(round(54.9, 1), 50);
    t.equal(round(55.55, -1), 55.6);
    t.equal(round(55.549, -1), 55.5);
    t.equal(round(-55, 1), -50);
    t.equal(round(-55.1, 1), -60);
    t.equal(round(-55.55, -1), -55.5);
    t.equal(round(-55.551, -1), -55.6);
    t.equal(round(1.005, -2), 1.01);
    
    t.end();
});