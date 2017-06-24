let test = require('tape');

let childIndex = require('../../src/browser/Element/childIndex');


test('Element.childIndex', (t) => {
    let fixture = document.createElement('div');
    fixture.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    t.equal(childIndex(fixture.children[0]), 0);
    t.equal(childIndex(fixture.children[1]), 1);
    t.equal(childIndex(fixture.children[2]), 2);
    
    t.end();
});