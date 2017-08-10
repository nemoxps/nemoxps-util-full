let test = require('tape');

let insertAfter = require('../../src/browser/Node/insertAfter');


test('Node#insertAfter', (t) => {
    let fixture = document.createElement('div');
    fixture.innerHTML = `
        <span></span>
    `;
    let elem = document.createElement('span');
    
    insertAfter(elem, fixture.children[0]);
    t.notEqual(fixture.children[0], elem);
    t.equal(fixture.children[1], elem);
    
    t.end();
});