let test = require('tape');

let indent = require('../src/String/indent');


test('String#indent', (t) => {
    let cutTemplateString = (str) => str.replace(/^\n|\n *$/g, '');
    
    let str = cutTemplateString(`
        The quick brown fox

        jumps over the lazy dog.
    `);
    
    t.equal(indent(str), cutTemplateString(`
         The quick brown fox

         jumps over the lazy dog.
    `));
    t.equal(indent(str, 4), cutTemplateString(`
            The quick brown fox

            jumps over the lazy dog.
    `));
    t.equal(indent(str, 2, '\t'), cutTemplateString(`
\t\t        The quick brown fox

\t\t        jumps over the lazy dog.
    `));
    
    t.end();
});