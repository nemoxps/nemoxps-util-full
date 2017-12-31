let test = require('tape');

let find = require('../src/Object/find');


test('Object#find', (t) => {
    let fn = find;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    tt([obj, (val) => val === '_'], undefined);
    tt([obj, (val) => val.startsWith('x') && val.endsWith('y')], 'xzy');
    tt([obj, (val, key) => key.startsWith('a') && key.endsWith('b')], 'xzy');
    
    t.end();
});