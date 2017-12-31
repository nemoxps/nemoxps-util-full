let test = require('tape');

let round = require('../src/Math/round');


test('Math.round', (t) => {
    let fn = round;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    tt.default = (args, defaultArgs, msg) => {
        t.equal(fn(...args), fn(...defaultArgs), msg);
    };
    
    tt.default([55.55], [55.55, 0]);
    
    tt([55.55, 0], Math.round(55.55));
    tt([55, 1], 60);
    tt([54.9, 1], 50);
    tt([55.55, -1], 55.6);
    tt([55.549, -1], 55.5);
    tt([-55, 1], -50);
    tt([-55.1, 1], -60);
    tt([-55.55, -1], -55.5);
    tt([-55.551, -1], -55.6);
    tt([1.005, -2], 1.01);
    
    t.end();
});