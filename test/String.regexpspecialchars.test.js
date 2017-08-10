let test = require('tape');

let regexpspecialchars = require('../src/String/regexpspecialchars');


test('String#regexpspecialchars', (t) => {
    t.equal(
        regexpspecialchars('^The (quick)* [brown]+ fox |\\- jumps over the {lazy}? dog.$'),
        '\\^The \\(quick\\)\\* \\[brown\\]\\+ fox \\|\\\\\\- jumps over the \\{lazy\\}\\? dog\\.\\$'
    );
    
    t.end();
});