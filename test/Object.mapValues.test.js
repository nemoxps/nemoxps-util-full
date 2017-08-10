let test = require('tape');

let mapValues = require('../src/Object/mapValues');


test('Object.mapValues', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.deepEqual(
        mapValues(obj, (val) => val + '_'),
        { abc: 'xyz_', acb: 'xzy_', bac: 'yxz_', bca: 'yzx_', cab: 'zxy_', cba: 'zyx_' }
    );
    
    t.deepEqual(
        mapValues(obj, (val) => val + '_', Object.create(null)),
        { abc: 'xyz_', acb: 'xzy_', bac: 'yxz_', bca: 'yzx_', cab: 'zxy_', cba: 'zyx_' }
    );
    t.equal(Object.getPrototypeOf(mapValues(obj, (val) => val, Object.create(null))), null);
    
    t.end();
});