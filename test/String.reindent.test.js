let test = require('tape');

let reindent = require('../src/String/reindent');


test('String#reindent', (t) => {
    let cutTemplateString = (str) => str.replace(/^\n|\n *$/g, '');
    
    let str = cutTemplateString(`
        The quick brown fox
        
          jumps over the lazy dog.
    `);
    
    t.equal(reindent(str), cutTemplateString(`
The quick brown fox

  jumps over the lazy dog.
    `));
    t.equal(reindent(str, 4), cutTemplateString(`
    The quick brown fox

      jumps over the lazy dog.
    `));
    t.equal(reindent(str, 2, '\t'), cutTemplateString(`
\t\tThe quick brown fox

\t\t  jumps over the lazy dog.
    `));
    
    t.end();
});