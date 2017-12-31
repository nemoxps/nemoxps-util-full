let test = require('tape');

let mapValues = require('../src/Object/mapValues');


test('Object#mapValues', (t) => {
    let fn = mapValues;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.acc = (args, expected, expected2, msg) => {
        tt(args, expected, msg);
        t.equal(Object.getPrototypeOf(fn(...args)), expected2, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    let res = { abc: 'xyz_', acb: 'xzy_', bac: 'yxz_', bca: 'yzx_', cab: 'zxy_', cba: 'zyx_' };
    
    tt([obj, (val) => val + '_'], res);
    
    tt.acc([obj, (val) => val + '_', Object.create(null)], res, null);
    
    t.end();
});