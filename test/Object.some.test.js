let test = require('tape');

let some = require('../src/Object/some');


test('Object.some', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.equal(some(obj, (val) => val.endsWith('a')), true);
    t.equal(some(obj, (val, key) => key.endsWith('a')), true);
    
    t.end();
});