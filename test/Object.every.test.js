let test = require('tape');

let every = require('../src/Object/every');


test('Object.every', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.equal(every(obj, (val) => val.includes('x')), true);
    t.equal(every(obj, (val, key) => key.includes('a')), true);
    
    t.end();
});