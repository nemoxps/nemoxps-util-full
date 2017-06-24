let test = require('tape');

let mapKeys = require('../src/Object/mapKeys');


test('Object.mapKeys', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.deepEqual(
        mapKeys(obj, (val, key) => key + 'x'),
        { abcx: 'abc', acbx: 'acb', bacx: 'bac', bcax: 'bca', cabx: 'cab', cbax: 'cba' }
    );
    
    t.end();
});