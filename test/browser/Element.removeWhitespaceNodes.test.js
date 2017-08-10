let test = require('tape');

let removeWhitespaceNodes = require('../../src/browser/Element/removeWhitespaceNodes');


test('Element#removeWhitespaceNodes', (t) => {
    let fixture = document.createElement('div');
    fixture.innerHTML = `
        <span>The quick brown fox</span>
        
        <span> </span>
        
        <span>jumps over the lazy dog.</span>
        
        <div>
          <span>The quick brown fox</span>
          
          <span> </span>
          
          <span>jumps over the lazy dog.</span>
        </div>
    `;
    
    removeWhitespaceNodes(fixture);
    t.equal(fixture.innerHTML, [
        '<span>The quick brown fox</span>',
        '<span></span>',
        '<span>jumps over the lazy dog.</span>',
        '<div>',
        '<span>The quick brown fox</span>',
        '<span></span>',
        '<span>jumps over the lazy dog.</span>',
        '</div>'
    ].join(''));
    
    t.end();
});