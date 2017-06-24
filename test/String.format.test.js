let test = require('tape');

let format = require('../src/String/format');


test('String.format', (t) => {
    t.equal(format`
        The quick brown fox
        
          jumps over the lazy dog.
    `, `
The quick brown fox

  jumps over the lazy dog.
    `.replace(/^\n|\n *$/g, ''));
    t.equal(format`
        The ${['quick', 'brown', 'fox']}
        jumps over the
        ${['lazy', 'dog']}.
    `, `
The quick, brown, fox
jumps over the
lazy
dog.
    `.replace(/^\n|\n *$/g, ''));
    t.equal(format`
        ${'The'} quick brown fox
        jumps over
          ${['the', 'lazy']}
        ${'dog'}.
    `, `
The quick brown fox
jumps over
  the
  lazy
dog.
    `.replace(/^\n|\n *$/g, ''));
    
    t.end();
});