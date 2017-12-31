let test = require('tape');

let stripIndent = require('../src/String/stripIndent');


test('String#stripIndent', (t) => {
    let fn = stripIndent;
    let trimTemplateString = (str) => str.replace(/^\n|\n *$/g, '');
    let tt = (arg, expected, msg) => {
        t.equal(fn(trimTemplateString(arg)), trimTemplateString(expected), msg);
    };
    
    tt(
        `
            The quick brown fox
            
              jumps over the lazy dog.
        `,
        `
The quick brown fox

  jumps over the lazy dog.
        `
    );
    
    t.end();
});