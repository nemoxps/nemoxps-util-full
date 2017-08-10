let test = require('tape');

let find = require('../src/Object/find');


test('Object.find', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.equal(find(obj, (val) => val.startsWith('x') && val.endsWith('y')), 'xzy');
    t.equal(find(obj, (val, key) => key.startsWith('a') && key.endsWith('b')), 'xzy');
    t.equal(find(obj, (val) => val === '_'), undefined);
    
    t.end();
});