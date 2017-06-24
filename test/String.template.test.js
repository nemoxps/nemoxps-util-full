let test = require('tape');

let template = require('../src/String/template');


test('String.template', (t) => {
    let substitutions = { name: 'Nemo', msg: 'how are you?' };
    let str = `Hi ${substitutions.name}, ${substitutions.msg}`;
    
    t.equal(template('Hi {{name}}, {{msg}}', substitutions), str);
    t.equal(template('Hi $name$, $msg$', '$', substitutions), str);
    t.equal(template('Hi <name>, <msg>', ['<', '>'], substitutions), str);
    t.equal(template('Hi {{name}}, {{msg}}', { name: substitutions.name }), `Hi ${substitutions.name}, {{msg}}`);
    t.equal(typeof template('Hi {{name}}, {{msg}}'), 'function');
    t.equal(template('Hi {{name}}, {{msg}}')(substitutions), str);
    
    t.end();
});