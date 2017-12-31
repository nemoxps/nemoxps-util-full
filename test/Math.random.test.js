let test = require('tape');

let random = require('../src/Math/random');


test('Math.random', (t) => {
    let fn = random;
    let getSomeNumbers = (args) => new Array(1e4).fill(null).map(() => fn(...args));
    let tt = (args, expected, msg) => {
        t.equal(getSomeNumbers(args).every((num) => num >= expected[0] && num <= expected[1]), true, msg);
    };
    
    tt([7], [0, 7]);
    tt([4, 7], [4, 7]);
    
    t.end();
});