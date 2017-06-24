let test = require('tape');

let stripIndent = require('../src/String/stripIndent');


test('String.stripIndent', (t) => {
    t.equal(
        stripIndent(`
            The quick brown fox
            
              jumps over the lazy dog.
        `.replace(/^\n|\n *$/g, '')),
        `
The quick brown fox

  jumps over the lazy dog.
        `.replace(/^\n|\n *$/g, '')
    );
    
    t.end();
});