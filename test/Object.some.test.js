let test = require('tape');

let some = require('../src/Object/some');


test('Object#some', (t) => {
    let fn = some;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    tt([obj, (val) => val.endsWith('x')], true);
    tt([obj, (val, key) => key.endsWith('a')], true);
    
    t.end();
});