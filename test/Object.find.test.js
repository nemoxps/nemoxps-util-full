let test = require('tape');

let find = require('../src/Object/find');


test('Object.find', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.equal(find(obj, (val) => val.startsWith('a') && val.endsWith('b')), 'acb');
    t.equal(find(obj, (val, key) => key.startsWith('a') && key.endsWith('b')), 'acb');
    
    t.end();
});