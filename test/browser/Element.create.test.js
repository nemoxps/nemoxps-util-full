let test = require('tape');

let create = require('../../src/browser/Element/create');


test('Element.create', (t) => {
    let elem = create('div');
    t.equal(elem.tagName.toLowerCase(), 'div');
    
    elem = create('div#testID');
    t.equal(elem.tagName.toLowerCase(), 'div');
    t.equal(elem.id, 'testID');
    
    elem = create('div.testClass1');
    t.equal(elem.tagName.toLowerCase(), 'div');
    t.equal(elem.className, 'testClass1');
    
    elem = create('div.testClass1.testClass2');
    t.equal(elem.tagName.toLowerCase(), 'div');
    t.equal(elem.className, 'testClass1 testClass2');
    
    elem = create('div#testID.testClass1');
    t.equal(elem.tagName.toLowerCase(), 'div');
    t.equal(elem.id, 'testID');
    t.equal(elem.className, 'testClass1');
    
    elem = create('div.testClass1#testID');
    t.equal(elem.tagName.toLowerCase(), 'div');
    t.equal(elem.id, 'testID');
    t.equal(elem.className, 'testClass1');
    
    elem = create('div.testClass1#testID.testClass2');
    t.equal(elem.tagName.toLowerCase(), 'div');
    t.equal(elem.id, 'testID');
    t.equal(elem.className, 'testClass1 testClass2');
    
    elem = create('div', 'textContent');
    t.equal(elem.tagName.toLowerCase(), 'div');
    t.equal(elem.textContent, 'textContent');
    
    elem = create('div', 42);
    t.equal(elem.tagName.toLowerCase(), 'div');
    t.equal(elem.textContent, '42');
    
    elem = create('div', { innerHTML: '<span></span>', style: { lineHeight: 1.5 } });
    t.equal(elem.tagName.toLowerCase(), 'div');
    t.equal(elem.innerHTML, '<span></span>');
    t.equal(elem.style.lineHeight, '1.5');
    
    t.end();
});