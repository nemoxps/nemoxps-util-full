let test = require('tape');

let fromEntries = require('../src/Object/fromEntries');


test('Object.fromEntries', (t) => {
    let obj = { abc: 'abc', acb: 'acb', bac: 'bac', bca: 'bca', cab: 'cab', cba: 'cba' };
    
    t.deepEqual(fromEntries(Object.entries(obj)), obj);
    t.notEqual(
        Object.getPrototypeOf(fromEntries(Object.entries(Object.assign(Object.create(null), obj)))),
        Object.getPrototypeOf(Object.create(null))
    );
    t.equal(
        Object.getPrototypeOf(fromEntries(Object.entries(Object.assign(Object.create(null), obj)), Object.create(null))),
        Object.getPrototypeOf(Object.create(null))
    );
    
    t.end();
});