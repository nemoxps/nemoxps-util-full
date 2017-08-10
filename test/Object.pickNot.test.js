let test = require('tape');

let pickNot = require('../src/Object/pickNot');


test('Object.pickNot', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.deepEqual(pickNot(obj, 'abc'), { acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' });
    t.deepEqual(pickNot(obj, 'abc', 'acb'), { bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' });
    
    t.deepEqual(pickNot(obj, 'abc', Object.create(null)), { acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' });
    t.deepEqual(pickNot(obj, 'abc', 'acb', Object.create(null)), { bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' });
    t.equal(Object.getPrototypeOf(pickNot(obj, 'abc', Object.create(null))), null);
    t.equal(Object.getPrototypeOf(pickNot(obj, 'abc', 'acb', Object.create(null))), null);
    
    t.end();
});