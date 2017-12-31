let path = require('path');

let test = require('tape');

let doesPathBreakOut = require('../../src/node/path/doesPathBreakOut');


test('path.doesPathBreakOut', (t) => {
    let fn = doesPathBreakOut;
    let tt = (args, expected, msg) => {
        t.equal(fn(...args), expected, msg);
    };
    
    tt([__dirname, 'index.txt'], false);
    tt([__dirname, '/index.txt'], false);
    tt([__dirname, 'dir/index.txt'], false);
    tt([__dirname, path.join('../', path.basename(__dirname), 'index.txt')], false);
    tt([__dirname, '../index.txt'], true);
    tt([__dirname, path.join('../../', path.basename(__dirname), 'index.txt')], true);
    
    t.end();
});