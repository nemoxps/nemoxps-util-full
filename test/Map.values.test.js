let test = require('tape');

let values = require('../src/Map/values');


test('Map.values', (t) => {
    let map = new Map([
        [{ id: 1 }, { val: '111' }],
        [{ id: 2 }, { val: '222' }],
        [{ id: 3 }, { val: '333' }],
    ]);
    
    t.deepLooseEqual(values(map), [{ val: '111' }, { val: '222' }, { val: '333' }]);
    
    t.end();
});