let test = require('tape');

let filter = require('../src/Object/filter');


test('Object#filter', (t) => {
    let fn = filter;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.acc = (args, expected, expected2, msg) => {
        tt(args, expected, msg);
        t.equal(Object.getPrototypeOf(fn(...args)), expected2, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    tt([obj, (val) => val.startsWith('x')], { abc: 'xyz', acb: 'xzy' });
    tt([obj, (val, key) => key.startsWith('a')], { abc: 'xyz', acb: 'xzy' });
    
    tt.acc([obj, (val) => val.startsWith('x'), Object.create(null)], { abc: 'xyz', acb: 'xzy' }, null);
    
    t.end();
});