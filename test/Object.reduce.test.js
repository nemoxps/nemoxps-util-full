let test = require('tape');

let reduce = require('../src/Object/reduce');


test('Object.reduce', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.equal(reduce(obj, (r, val) => r + val, ''), 'abcacbbacbcacabcba');
    t.equal(reduce(obj, (r, val, key) => r + key, ''), 'abcacbbacbcacabcba');
    
    t.end();
});