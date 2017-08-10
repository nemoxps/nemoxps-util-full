let test = require('tape');

let pick = require('../src/Object/pick');


test('Object.pick', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.deepEqual(pick(obj, 'abc'), { abc: 'xyz' });
    t.deepEqual(pick(obj, 'abc', 'acb'), { abc: 'xyz', acb: 'xzy' });
    
    t.deepEqual(pick(obj, 'abc', Object.create(null)), { abc: 'xyz' });
    t.deepEqual(pick(obj, 'abc', 'acb', Object.create(null)), { abc: 'xyz', acb: 'xzy' });
    t.equal(Object.getPrototypeOf(pick(obj, 'abc', Object.create(null))), null);
    t.equal(Object.getPrototypeOf(pick(obj, 'abc', 'acb', Object.create(null))), null);
    
    t.end();
});