let test = require('tape');

let findKey = require('../src/Object/findKey');


test('Object#findKey', (t) => {
    let fn = findKey;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    tt([obj, (val) => val === '_'], undefined);
    tt([obj, (val) => val.startsWith('x') && val.endsWith('y')], 'acb');
    tt([obj, (val, key) => key.startsWith('a') && key.endsWith('b')], 'acb');
    
    t.end();
});