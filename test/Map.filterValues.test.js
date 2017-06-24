let test = require('tape');

let filterValues = require('../src/Map/filterValues');


test('Map.filterValues', (t) => {
    let map = new Map([
        [{ id: 1 }, { val: '111' }],
        [{ id: 2 }, { val: '222' }],
        [{ id: 3 }, { val: '333' }],
    ]);
    
    t.deepLooseEqual(filterValues(map, (val) => Number(val.val) > 222), [{ val: '333' }]);
    t.deepLooseEqual(filterValues(map, (val, key) => key.id > 2), [{ val: '333' }]);
    
    t.end();
});