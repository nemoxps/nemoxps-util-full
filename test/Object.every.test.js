let test = require('tape');

let every = require('../src/Object/every');


test('Object.every', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.equal(every(obj, (val) => val.includes('a')), true);
    t.equal(every(obj, (val, key) => key.includes('a')), true);
    
    t.end();
});