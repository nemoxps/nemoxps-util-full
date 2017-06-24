let test = require('tape');

let findKey = require('../src/Object/findKey');


test('Object.findKey', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.equal(findKey(obj, (val) => val.startsWith('a') && val.endsWith('b')), 'acb');
    t.equal(findKey(obj, (val, key) => key.startsWith('a') && key.endsWith('b')), 'acb');
    
    t.end();
});