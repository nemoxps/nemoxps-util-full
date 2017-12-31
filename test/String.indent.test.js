let test = require('tape');

let indent = require('../src/String/indent');


test('String#indent', (t) => {
    let fn = indent;
    let trimTemplateString = (str) => str.replace(/^\n|\n *$/g, '');
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), trimTemplateString(expected), msg);
    };
    tt.default = (args, defaultArgs, msg) => {
        t.equal(fn(...args), fn(...defaultArgs), msg);
    };
    
    let str = trimTemplateString(`
        The quick brown fox

        jumps over the lazy dog.
    `);
    
    tt.default([str], [str, 1, ' ']);
    
    tt([str, 1, ' '], `
         The quick brown fox

         jumps over the lazy dog.
    `);
    tt([str, 4, ' '], `
            The quick brown fox

            jumps over the lazy dog.
    `);
    tt([str, 2, '\t'], `
\t\t        The quick brown fox

\t\t        jumps over the lazy dog.
    `);
    
    t.end();
});