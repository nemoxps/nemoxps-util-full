let test = require('tape');

let regexpspecialchars = require('../src/String/regexpspecialchars');


test('String#regexpspecialchars', (t) => {
    let fn = regexpspecialchars;
    let tt = (arg, expected, msg) => {
        t.equal(fn(arg), expected, msg);
    };
    
    tt(
        '^The (quick)* [brown]+ fox |\\- jumps over the {lazy}? dog.$',
        '\\^The \\(quick\\)\\* \\[brown\\]\\+ fox \\|\\\\\\- jumps over the \\{lazy\\}\\? dog\\.\\$'
    );
    
    t.end();
});