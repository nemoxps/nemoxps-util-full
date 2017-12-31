let test = require('tape');

let mapKeys = require('../src/Object/mapKeys');


test('Object#mapKeys', (t) => {
    let fn = mapKeys;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.acc = (args, expected, expected2, msg) => {
        tt(args, expected, msg);
        t.equal(Object.getPrototypeOf(fn(...args)), expected2, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    let res = { _abc: 'xyz', _acb: 'xzy', _bac: 'yxz', _bca: 'yzx', _cab: 'zxy', _cba: 'zyx' };
    
    tt([obj, (val, key) => '_' + key], res);
    
    tt.acc([obj, (val, key) => '_' + key, Object.create(null)], res, null);
    
    t.end();
});