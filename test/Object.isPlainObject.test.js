let test = require('tape');

let isPlainObject = require('../src/Object/isPlainObject');


test('Object.isPlainObject', (t) => {
    let fn = isPlainObject;
    let tt = (arg, expected, msg) => {
        t.equal(fn(arg), expected, msg);
    };
    
    tt({}, true);
    tt(Object.create(null), false);
    tt([], false);
    tt(new class {}(), false);
    tt(() => {}, false);
    tt(null, false);
    tt(undefined, false);
    
    t.end();
});