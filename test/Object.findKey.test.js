let test = require('tape');

let findKey = require('../src/Object/findKey');


test('Object.findKey', (t) => {
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    t.equal(findKey(obj, (val) => val.startsWith('x') && val.endsWith('y')), 'acb');
    t.equal(findKey(obj, (val, key) => key.startsWith('a') && key.endsWith('b')), 'acb');
    t.equal(findKey(obj, (val) => val === '_'), undefined);
    
    t.end();
});