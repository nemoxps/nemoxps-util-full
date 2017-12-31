let test = require('tape');

let isObject = require('../src/Object/isObject');


test('Object.isObject', (t) => {
    let fn = isObject;
    let tt = (arg, expected, msg) => {
        t.equal(fn(arg), expected, msg);
    };
    
    tt({}, true);
    tt(Object.create(null), true);
    tt([], true);
    tt(new class {}(), true);
    tt(() => {}, false);
    tt(null, false);
    tt(undefined, false);
    
    t.end();
});