let test = require('tape');

let map = require('../src/Object/map');


test('Object.map', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.deepEqual(
        map(obj, (val, key) => [key + 'x', '_' + val]),
        { abcx: '_abc', acbx: '_acb', bacx: '_bac', bcax: '_bca', cabx: '_cab', cbax: '_cba' }
    );
    
    t.end();
});