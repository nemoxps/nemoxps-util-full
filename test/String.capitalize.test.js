let test = require('tape');

let capitalize = require('../src/String/capitalize');


test('String#capitalize', (t) => {
    let fn = capitalize;
    let tt = (arg, expected, msg) => {
        t.equal(fn(arg), expected, msg);
    };
    
    tt('', '');
    tt('abc', 'Abc');
    tt('abcXcba', 'Abcxcba');
    
    t.end();
});