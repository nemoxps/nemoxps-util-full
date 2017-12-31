let test = require('tape');

let template = require('../src/String/template');


test('String#template', (t) => {
    let fn = template;
    let tt = (args, callArg, expected, msg) => {
        t.equal(fn(...args)(callArg), expected, msg);
    };
    tt.default = (args, defaultArgs, callArg, msg) => {
        t.equal(fn(...args)(callArg), fn(...defaultArgs)(callArg), msg);
    };
    
    let substitutions = { name: 'Nemo', msg: 'how are you?' };
    let str = `Hi ${substitutions.name}, ${substitutions.msg}`;
    
    tt.default(['Hi {{name}}, {{msg}}'], ['Hi {{name}}, {{msg}}', ['{{', '}}']], substitutions);
    
    tt(['Hi {{name}}, {{msg}}', ['{{', '}}']], substitutions, str);
    tt(['Hi $name$, $msg$', '$'], substitutions, str);
    tt(['Hi $name$, $msg$', ['$']], substitutions, str);
    tt(['Hi <name>, <msg>', ['<', '>']], substitutions, str);
    tt(['Hi {{name}}, {{msg}}', ['{{', '}}']], { name: substitutions.name }, `Hi ${substitutions.name}, {{msg}}`);
    
    t.end();
});