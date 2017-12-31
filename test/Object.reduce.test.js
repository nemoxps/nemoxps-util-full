let test = require('tape');

let reduce = require('../src/Object/reduce');


test('Object#reduce', (t) => {
    let fn = reduce;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    tt([obj, (r, val) => r + val, ''], 'xyzxzyyxzyzxzxyzyx');
    tt([obj, (r, val, key) => r + key, ''], 'abcacbbacbcacabcba');
    
    t.end();
});