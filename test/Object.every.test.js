let test = require('tape');

let every = require('../src/Object/every');


test('Object#every', (t) => {
    let fn = every;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    tt([obj, (val) => val.includes('x')], true);
    tt([obj, (val, key) => key.includes('a')], true);
    
    t.end();
});