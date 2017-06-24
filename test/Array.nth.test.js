let test = require('tape');

let nth = require('../src/Array/nth');


test('Array.nth', (t) => {
    let arr = [1, 2, 3, 4];
    let l = arr.length;
    
    t.equal(nth([], 0), undefined);
    t.equal(nth(arr, 0), arr[0]);
    t.equal(nth(arr, 1), arr[1]);
    t.equal(nth(arr, -1), arr[l - 1]);
    
    t.end();
});