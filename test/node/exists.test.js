let test = require('tape');

let exists = require('../../src/node/exists');


test('exists', (t) => {
    (async () => {
        await Promise.all([
            exists(__filename).then((exists) => {
                t.equal(exists, true);
            }),
            exists(__dirname).then((exists) => {
                t.equal(exists, true);
            }),
            exists(__filename + 'foobar').then((exists) => { // eslint-disable-line no-path-concat
                t.equal(exists, false);
            }),
        ]);
        
        t.end();
    })();
});