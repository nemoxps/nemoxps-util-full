let path = require('path');

let test = require('blue-tape');

let exists = require('../../src/node/fsp/exists');


test('fsp.exists', async (t) => {
    let fn = exists;
    let tt = async (arg, expected, msg) => {
        let exists = await fn(arg);
        t.equal(exists, expected, msg);
    };
    
    await tt(__filename, true);
    await tt(__dirname, true);
    await tt(path.resolve(__dirname, 'foobar.baz'), false);
});