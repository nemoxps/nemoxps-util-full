let path = require('path');

let test = require('tape');

let doesPathBreakOut = require('../../src/node/doesPathBreakOut');


test('doesPathBreakOut', (t) => {
    t.equal(doesPathBreakOut(__dirname, 'index.txt'), false);
    t.equal(doesPathBreakOut(__dirname, 'dir/index.txt'), false);
    t.equal(doesPathBreakOut(__dirname, path.join('../', path.basename(__dirname), 'index.txt')), false);
    t.equal(doesPathBreakOut(__dirname, '../index.txt'), true);
    t.equal(doesPathBreakOut(__dirname, path.join('../../', path.basename(__dirname), 'index.txt')), true);
    
    t.end();
});