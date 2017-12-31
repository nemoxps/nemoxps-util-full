let test = require('tape');

let pickNot = require('../src/Object/pickNot');


test('Object#pickNot', (t) => {
    let fn = pickNot;
    let tt = (args, expected, msg) => {
        t.deepEqual(fn(...args), expected, msg);
    };
    tt.acc = (args, expected, expected2, msg) => {
        tt(args, expected, msg);
        t.equal(Object.getPrototypeOf(fn(...args)), expected2, msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    
    tt([obj, 'abc'], { acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' });
    tt([obj, 'abc', 'acb'], { bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' });
    
    tt.acc([obj, 'abc', Object.create(null)], { acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' }, null);
    tt.acc([obj, 'abc', 'acb', Object.create(null)], { bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' }, null);
    
    t.end();
});