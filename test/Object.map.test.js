let test = require('tape');

let map = require('../src/Object/map');


test('Object#map', (t) => {
    let fn = map;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.acc = (args, expected, expected2, msg) => {
        tt(args, expected, msg);
        t.equal(Object.getPrototypeOf(fn(...args)), expected2, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    let res = { _abc: 'xyz_', _acb: 'xzy_', _bac: 'yxz_', _bca: 'yzx_', _cab: 'zxy_', _cba: 'zyx_' };
    
    tt([obj, (val, key) => ['_' + key, val + '_']], res);
    
    tt.acc([obj, (val, key) => ['_' + key, val + '_'], Object.create(null)], res, null);
    
    t.end();
});