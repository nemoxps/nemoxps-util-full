let test = require('tape');

let reduce = require('../src/Object/reduce');


test('Object.reduce', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.equal(reduce(obj, (r, val) => r + val, ''), 'xyzxzyyxzyzxzxyzyx');
    t.equal(reduce(obj, (r, val, key) => r + key, ''), 'abcacbbacbcacabcba');
    
    t.end();
});