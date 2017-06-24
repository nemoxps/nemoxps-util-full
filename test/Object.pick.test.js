let test = require('tape');

let pick = require('../src/Object/pick');


test('Object.pick', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.deepEqual(
        pick(obj, 'abc'),
        { abc: 'abc' }
    );
    t.deepEqual(
        pick(obj, 'abc', 'acb'),
        { abc: 'abc', acb: 'acb' }
    );
    
    t.end();
});