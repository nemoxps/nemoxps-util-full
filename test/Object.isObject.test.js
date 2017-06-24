let test = require('tape');

let isObject = require('../src/Object/isObject');


test('Object.isObject', (t) => {
    t.equal(isObject({}), true);
    t.equal(isObject(Object.create(null)), true);
    t.equal(isObject([]), true);
    t.equal(isObject(new class {}()), true);
    t.equal(isObject(() => {}), false);
    t.equal(isObject(null), false);
    t.equal(isObject(undefined), false);
    
    t.end();
});