let test = require('tape');

let random = require('../src/Math/random');


test('Math.random', (t) => {
    let getSomeNumbers = (...args) => new Array(1e4).fill(null).map(() => random(...args));
    
    t.equal(getSomeNumbers(7).every((num) => num >= 0 && num <= 7), true);
    t.equal(getSomeNumbers(4, 7).every((num) => num >= 4 && num <= 7), true);
    
    t.end();
});