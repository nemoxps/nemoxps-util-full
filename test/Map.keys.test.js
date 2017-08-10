let test = require('tape');

let keys = require('../src/Map/keys');


test('Map.keys', (t) => {
    let map = new Map([
        [{ id: 1 }, { val: '111' }],
        [{ id: 2 }, { val: '222' }],
        [{ id: 3 }, { val: '333' }],
    ]);
    
    t.deepLooseEqual(keys(map), [{ id: 1 }, { id: 2 }, { id: 3 }]);
    
    t.end();
});