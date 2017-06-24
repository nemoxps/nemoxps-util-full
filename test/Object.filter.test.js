let test = require('tape');

let filter = require('../src/Object/filter');


test('Object.filter', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.deepEqual(filter(obj, (val) => val.startsWith('a')), { abc: 'abc', acb: 'acb' });
    t.deepEqual(filter(obj, (val, key) => key.startsWith('a')), { abc: 'abc', acb: 'acb' });
    
    t.end();
});