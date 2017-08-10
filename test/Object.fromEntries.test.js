let test = require('tape');

let fromEntries = require('../src/Object/fromEntries');


test('Object.fromEntries', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.deepEqual(fromEntries(Object.entries(obj)), obj);
    t.notEqual(Object.getPrototypeOf(fromEntries(Object.entries(Object.assign(Object.create(null), obj)))), null);
    
    t.deepEqual(fromEntries(Object.entries(obj), Object.create(null)), obj);
    t.equal(Object.getPrototypeOf(fromEntries(Object.entries(Object.assign(Object.create(null), obj)), Object.create(null))), null);
    
    t.end();
});