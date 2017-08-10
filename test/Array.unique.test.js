let test = require('tape');

let unique = require('../src/Array/unique');


test('Array#unique', (t) => {
    t.deepEqual(unique([]), []);
    t.deepEqual(unique([1, 2, 3, 4]), [1, 2, 3, 4]);
    t.deepEqual(unique([1, 2, 3, 4, 2, 3, 4, 3, 4, 4]), [1, 2, 3, 4]);
    let arr = [{ abc: 'abc' }, { abc: 'abc' }];
    t.deepEqual(unique(arr), arr);
    arr.push(arr[0]);
    t.deepEqual(unique(arr), arr.slice(0, 2));
    
    t.end();
});