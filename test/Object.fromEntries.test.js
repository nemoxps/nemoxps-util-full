let test = require('tape');

let fromEntries = require('../src/Object/fromEntries');


test('Object.fromEntries', (t) => {
    let fn = fromEntries;
    let tt = (args, expected, expected2, msg) => {
        let o = fn(...args);
        t.deepEqual(o, expected, msg);
        t.equal(Object.getPrototypeOf(o), expected2, msg);
    };
    tt.default = (args, defaultArgs, msg) => {
        t.deepEqual(fn(...args), fn(...defaultArgs), msg);
    };
    
    let obj = { abc: 'xyz', acb: 'xzy', bac: 'yxz', bca: 'yzx', cab: 'zxy', cba: 'zyx' };
    let entries = Object.entries(obj);
    
    tt([entries, {}], obj, Object.prototype);
    tt([entries, Object.create(null)], obj, null);
    
    t.end();
});