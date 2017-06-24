let test = require('tape');

let Storage = require('../../src/browser/Storage');


test('Storage', (t) => {
    t.equal(window.localStorage.getItem('test-key'), null);
    
    let storage = new Storage('test-key');
    t.equal(storage.storage, window.localStorage);
    
    t.equal(storage.exists(), false);
    t.equal(storage.get(), null);
    storage.set('test-value');
    t.equal(storage.exists(), true);
    t.equal(storage.get(), 'test-value');
    storage.remove();
    t.equal(storage.exists(), false);
    t.equal(storage.get(), null);
    
    t.throws(() => new Storage(''));
    
    t.equal(new Storage('x', 'sessionStorage').storage, window.sessionStorage);
    t.equal([window.localStorage, window.sessionStorage].includes(new Storage('x', '').storage), false);
    
    storage = new Storage('test-key', {
        serialize(value) {
            return `:::${value}:::`;
        },
        deserialize(value) {
            return value.slice(3, -3);
        },
    });
    storage.set('test-value');
    t.equal(storage.storage.getItem(storage.key), ':::test-value:::');
    t.equal(storage.get(), 'test-value');
    storage.remove();
    
    t.end();
});