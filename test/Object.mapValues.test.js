let test = require('tape');

let mapValues = require('../src/Object/mapValues');


test('Object.mapValues', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.deepEqual(
        mapValues(obj, (val) => '_' + val),
        { abc: '_abc', acb: '_acb', bac: '_bac', bca: '_bca', cab: '_cab', cba: '_cba' }
    );
    
    t.end();
});