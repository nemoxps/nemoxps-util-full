let test = require('tape');

let filterKeys = require('../src/Map/filterKeys');


test('Map.filterKeys', (t) => {
    let map = new Map([
        [{ id: 1 }, { val: '111' }],
        [{ id: 2 }, { val: '222' }],
        [{ id: 3 }, { val: '333' }],
    ]);
    
    t.deepLooseEqual(filterKeys(map, (val) => Number(val.val) > 222), [{ id: 3 }]);
    t.deepLooseEqual(filterKeys(map, (val, key) => key.id > 2), [{ id: 3 }]);
    
    t.end();
});