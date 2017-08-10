let test = require('tape');

let isPlainObject = require('../src/Object/isPlainObject');


test('Object.isPlainObject', (t) => {
    t.equal(isPlainObject({}), true);
    t.equal(isPlainObject(Object.create(null)), false);
    t.equal(isPlainObject([]), false);
    t.equal(isPlainObject(new class {}()), false);
    t.equal(isPlainObject(() => {}), false);
    t.equal(isPlainObject(null), false);
    t.equal(isPlainObject(undefined), false);
    
    t.end();
});