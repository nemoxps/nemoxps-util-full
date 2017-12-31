let test = require('tape');

let anagrams = require('../src/String/anagrams');


test('String#anagrams', (t) => {
    let fn = anagrams;
    let tt = (arg, expected, msg) => {
        t.deepEqual(fn(arg), expected, msg);
    };
    
    tt('', []);
    tt('a', ['a']);
    tt('ab', ['ab', 'ba']);
    tt('abc', ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    tt('aaa', ['aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa']);
    
    t.end();
});