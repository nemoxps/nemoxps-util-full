let test = require('tape');

let trimts = require('../src/String/trimts');


test('String#trimts', (t) => {
    let fn = trimts;
    let trimTemplateString = (str) => str.replace(/^\n|\n *$/g, '');
    let tt = (arg, expected, msg) => {
        t.equal(fn(arg), trimTemplateString(expected), msg);
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