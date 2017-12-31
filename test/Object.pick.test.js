let test = require('tape');

let pick = require('../src/Object/pick');


test('Object#pick', (t) => {
    let fn = pick;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.acc = (args, expected, expected2, msg) => {
        tt(args, expected, msg);
        t.equal(Object.getPrototypeOf(fn(...args)), expected2, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    tt([obj, 'abc'], { abc: 'xyz' });
    tt([obj, 'abc', 'acb'], { abc: 'xyz', acb: 'xzy' });
    
    tt.acc([obj, 'abc', Object.create(null)], { abc: 'xyz' }, null);
    tt.acc([obj, 'abc', 'acb', Object.create(null)], { abc: 'xyz', acb: 'xzy' }, null);
    
    t.end();
});