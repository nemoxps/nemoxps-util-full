let path = require('path');

let test = require('tape');

let exists = require('../../src/node/fsp/exists');


test('fsp.exists', (t) => {
    let fn = exists;
    let tt = (arg, expected, msg) => {
        return fn(arg).then((exists) => {
            t.equal(exists, expected, msg);
        }).catch(() => {
            t.fail();
        });
    };
    
    (async () => {
        await Promise.all([
            tt(__filename, true),
            tt(__dirname, true),
            tt(path.resolve(__dirname, 'foobar.baz'), false),
        ]).catch(() => {});
        
        t.end();
    })();
});