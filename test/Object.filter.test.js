let test = require('tape');

let filter = require('../src/Object/filter');


test('Object.filter', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.deepEqual(filter(obj, (val) => val.startsWith('x')), { abc: 'xyz', acb: 'xzy' });
    t.deepEqual(filter(obj, (val, key) => key.startsWith('a')), { abc: 'xyz', acb: 'xzy' });
    
    t.deepEqual(filter(obj, (val) => val.startsWith('x'), Object.create(null)), { abc: 'xyz', acb: 'xzy' });
    t.equal(Object.getPrototypeOf(filter(obj, () => true, Object.create(null))), null);
    
    t.end();
});