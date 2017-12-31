let test = require('tape');

let format = require('../src/String/format');


test('String.format', (t) => {
    let fn = format;
    let trimTemplateString = (str) => str.replace(/^\n|\n *$/g, '');
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), trimTemplateString(expected), msg);
    };
    let catchTemplateArgs = (...args) => args;
    
    tt(
        catchTemplateArgs`
            The quick brown fox
            
              jumps over the lazy dog.
        `,
        `
The quick brown fox

  jumps over the lazy dog.
        `
    );
    
    tt(
        catchTemplateArgs`
            The ${['quick', 'brown', 'fox']}
            jumps over the
            ${['lazy', 'dog']}.
        `,
        `
The quick, brown, fox
jumps over the
lazy
dog.
        `
    );
    
    tt(
        catchTemplateArgs`
            ${'The'} quick brown fox
            jumps over
              ${['the', 'lazy']}
            ${'dog'}.
        `,
        `
The quick brown fox
jumps over
  the
  lazy
dog.
        `
    );
    
    t.end();
});