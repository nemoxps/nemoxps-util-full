let test = require('tape');

let format = require('../src/String/format');


test('String.format', (t) => {
    let cutTemplateString = (str) => str.replace(/^\n|\n *$/g, '');
    
    t.equal(
        format`
            The quick brown fox
            
              jumps over the lazy dog.
        `,
        cutTemplateString(`
The quick brown fox

  jumps over the lazy dog.
        `)
    );
    
    t.equal(
        format`
            The ${['quick', 'brown', 'fox']}
            jumps over the
            ${['lazy', 'dog']}.
        `,
        cutTemplateString(`
The quick, brown, fox
jumps over the
lazy
dog.
        `)
    );
    
    t.equal(
        format`
            ${'The'} quick brown fox
            jumps over
              ${['the', 'lazy']}
            ${'dog'}.
        `,
        cutTemplateString(`
The quick brown fox
jumps over
  the
  lazy
dog.
        `)
    );
    
    t.end();
});