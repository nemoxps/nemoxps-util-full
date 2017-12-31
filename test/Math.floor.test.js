let test = require('tape');

let floor = require('../src/Math/floor');


test('Math.floor', (t) => {
    let fn = floor;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    tt.default = (args, defaultArgs, msg) => {
        t.equal(fn(...args), fn(...defaultArgs), msg);
    };
    
    tt.default([55.55], [55.55, 0]);
    
    tt([55.55, 0], Math.floor(55.55));
    tt([59, 1], 50);
    tt([55.59, -1], 55.5);
    tt([-51, 1], -60);
    tt([-55.51, -1], -55.6);
    
    t.end();
});