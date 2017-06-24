let test = require('tape');

let reindent = require('../src/String/reindent');


test('String.reindent', (t) => {
    let str = `
        The quick brown fox
        
          jumps over the lazy dog.
    `.replace(/^\n|\n *$/g, '');
    
    t.equal(reindent(str), `
The quick brown fox

  jumps over the lazy dog.
    `.replace(/^\n|\n *$/g, ''));
    t.equal(reindent(str, 4), `
    The quick brown fox

      jumps over the lazy dog.
    `.replace(/^\n|\n *$/g, ''));
    t.equal(reindent(str, 2, '\t'), `
\t\tThe quick brown fox

\t\t  jumps over the lazy dog.
    `.replace(/^\n|\n *$/g, ''));
    
    t.end();
});