let test = require('tape');

let some = require('../src/Object/some');


test('Object.some', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.equal(some(obj, (val) => val.endsWith('x')), true);
    t.equal(some(obj, (val, key) => key.endsWith('a')), true);
    
    t.end();
});