let test = require('tape');

let stripIndent = require('../src/String/stripIndent');


test('String#stripIndent', (t) => {
    let cutTemplateString = (str) => str.replace(/^\n|\n *$/g, '');
    
    t.equal(
        stripIndent(cutTemplateString(`
            The quick brown fox
            
              jumps over the lazy dog.
        `)),
        cutTemplateString(`
The quick brown fox

  jumps over the lazy dog.
        `)
    );
    
    t.end();
});