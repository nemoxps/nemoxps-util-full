let test = require('tape');

let indent = require('../src/String/indent');


test('String.indent', (t) => {
    let str = `
        The quick brown fox

        jumps over the lazy dog.
    `.replace(/^\n|\n *$/g, '');
    
    t.equal(indent(str), `
         The quick brown fox

         jumps over the lazy dog.
    `.replace(/^\n|\n *$/g, ''));
    t.equal(indent(str, 4), `
            The quick brown fox

            jumps over the lazy dog.
    `.replace(/^\n|\n *$/g, ''));
    t.equal(indent(str, 2, '\t'), `
\t\t        The quick brown fox

\t\t        jumps over the lazy dog.
    `.replace(/^\n|\n *$/g, ''));
    
    t.end();
});