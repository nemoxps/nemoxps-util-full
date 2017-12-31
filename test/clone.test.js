let test = require('tape');

let clone = require('../src/clone');


test('clone', (t) => {
    let fn = clone;
    let tt = (arg, msg) => {
        t.equal(Object.is(fn(arg), arg), true, msg);
    };
    tt.deep = (arg, msg) => {
        let c = fn(arg);
        t.notEqual(c, arg, msg);
        t.deepEqual(c, arg, msg);
        t.equal(Object.getPrototypeOf(c), Object.getPrototypeOf(arg), msg);
    };
    tt.deepStrict = (arg, msg) => {
        tt.deep(arg, msg);
        t.deepEqual(Object.getOwnPropertyDescriptors(fn(arg)), Object.getOwnPropertyDescriptors(arg), msg);
    };
    tt.regexp = (arg, msg) => {
        if (!arg.global) throw new Error('bad test');
        tt.deep(arg, msg);
        arg.exec(arg.source);
        t.notEqual(fn(arg).lastIndex, arg.lastIndex, msg);
    };
    
    /* eslint-disable no-new-wrappers,symbol-description */
    tt('str');
    tt(123);
    tt(true);
    tt(undefined);
    tt(null);
    tt(NaN);
    tt(Symbol());
    tt(() => {});
    tt(new WeakSet([{ 0: 1 }]));
    tt(new WeakMap([[{ 0: 1 }, { 2: 3 }]]));
    tt.deep(new String('str'));
    tt.deep(new Number(123));
    tt.deep(new Boolean(true));
    tt.deep([0]);
    tt.deep({ 0: 1 });
    tt.deepStrict({ get x() { return 0; } });
    tt.deep(Object.assign(Object.create(null), { 0: 1 }));
    tt.deep(new class { construcor() { this[0] = 1; } }());
    tt.regexp(/x/gi);
    tt.deep(new Date());
    tt.deep(new Set([{ 0: 1 }]));
    tt.deep(new Map([[{ 0: 1 }, { 2: 3 }]]));
    /* eslint-enable no-new-wrappers,symbol-description */
    
    t.end();
});