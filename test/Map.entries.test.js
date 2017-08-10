let test = require('tape');

let entries = require('../src/Map/entries');


test('Map.entries', (t) => {
    let map = new Map([
        [{ id: 1 }, { val: '111' }],
        [{ id: 2 }, { val: '222' }],
        [{ id: 3 }, { val: '333' }],
    ]);
    
    t.deepLooseEqual(entries(map), [
        [{ id: 1 }, { val: '111' }],
        [{ id: 2 }, { val: '222' }],
        [{ id: 3 }, { val: '333' }],
    ]);
    
    t.end();
});