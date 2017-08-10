let test = require('tape');

let map = require('../src/Object/map');


test('Object.map', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.deepEqual(
        map(obj, (val, key) => ['_' + key, val + '_']),
        { _abc: 'xyz_', _acb: 'xzy_', _bac: 'yxz_', _bca: 'yzx_', _cab: 'zxy_', _cba: 'zyx_' }
    );
    
    t.deepEqual(
        map(obj, (val, key) => ['_' + key, val + '_'], Object.create(null)),
        { _abc: 'xyz_', _acb: 'xzy_', _bac: 'yxz_', _bca: 'yzx_', _cab: 'zxy_', _cba: 'zyx_' }
    );
    t.equal(Object.getPrototypeOf(map(obj, (val, key) => [key, val], Object.create(null))), null);
    
    t.end();
});