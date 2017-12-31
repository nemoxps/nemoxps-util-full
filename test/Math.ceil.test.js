let test = require('tape');

let ceil = require('../src/Math/ceil');


test('Math.ceil', (t) => {
    let fn = ceil;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    tt.default = (args, defaultArgs, msg) => {
        t.equal(fn(...args), fn(...defaultArgs), msg);
    };
    
    tt.default([55.55], [55.55, 0]);
    
    tt([55.55, 0], Math.ceil(55.55));
    tt([51, 1], 60);
    tt([55.51, -1], 55.6);
    tt([-59, 1], -50);
    tt([-55.59, -1], -55.5);
    
    t.end();
});