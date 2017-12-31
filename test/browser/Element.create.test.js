let test = require('tape');

let create = require('../../src/browser/Element/create');


test('Element.create', (t) => {
    let fn = create;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args).tagName.toLowerCase(), expected, msg);
    };
    tt.id = (args, [tag, expected], msg) => {
        tt(args, tag, msg);
        t.equal(fn(...args).id, expected, msg);
    };
    tt.class = (args, [tag, expected], msg) => {
        tt(args, tag, msg);
        t.equal(fn(...args).className, expected, msg);
    };
    tt.idclass = (args, [tag, id, className], msg) => {
        tt(args, tag, msg);
        t.equal(fn(...args).id, id, msg);
        t.equal(fn(...args).className, className, msg);
    };
    tt.text = (args, [tag, expected], msg) => {
        tt(args, tag, msg);
        t.equal(fn(...args).textContent, expected, msg);
    };
    
    tt(['span'], 'span');
    tt.id(['div#testID'], ['div', 'testID']);
    tt.class(['div.testClass1'], ['div', 'testClass1']);
    tt.class(['div.testClass1.testClass2'], ['div', 'testClass1 testClass2']);
    tt.idclass(['div#testID.testClass1'], ['div', 'testID', 'testClass1']);
    tt.idclass(['div.testClass1#testID'], ['div', 'testID', 'testClass1']);
    tt.idclass(['div.testClass1#testID.testClass2'], ['div', 'testID', 'testClass1 testClass2']);
    tt.text(['div', 'textContent'], ['div', 'textContent']);
    tt.text(['div', 42], ['div', '42']);
    
    let elem;
    elem = fn('div', { innerHTML: '<span></span>', style: { lineHeight: 1.5 } });
    t.equal(elem.innerHTML, '<span></span>');
    t.equal(elem.style.lineHeight, '1.5');
    
    elem = fn('div', { $events: { click() { this.dataset.clicked = 'true'; } } });
    t.equal(elem.dataset.clicked, undefined);
    elem.click();
    t.equal(elem.dataset.clicked, 'true');
    
    t.end();
});