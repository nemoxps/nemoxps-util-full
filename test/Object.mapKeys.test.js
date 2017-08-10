let test = require('tape');

let mapKeys = require('../src/Object/mapKeys');


test('Object.mapKeys', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.deepEqual(
        mapKeys(obj, (val, key) => '_' + key),
        { _abc: 'xyz', _acb: 'xzy', _bac: 'yxz', _bca: 'yzx', _cab: 'zxy', _cba: 'zyx' }
    );
    
    t.deepEqual(
        mapKeys(obj, (val, key) => '_' + key, Object.create(null)),
        { _abc: 'xyz', _acb: 'xzy', _bac: 'yxz', _bca: 'yzx', _cab: 'zxy', _cba: 'zyx' }
    );
    t.equal(Object.getPrototypeOf(mapKeys(obj, (val, key) => key, Object.create(null))), null);
    
    t.end();
});