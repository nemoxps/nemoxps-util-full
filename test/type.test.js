let test = require('tape');

let type = require('../src/type');


test('type', (t) => {
    let fn = type;
    let tt = (arg, expected, msg) => {
        t.equal(fn(arg), expected, msg);
    };
    
    /* eslint-disable no-new-wrappers,prefer-arrow-callback,no-empty-function,symbol-description */
    tt('', 'string');
    tt(new String(''), 'String');
    
    tt(0, 'number');
    tt(new Number(0), 'Number');
    tt(NaN, 'NaN');
    
    tt(true, 'boolean');
    tt(new Boolean(true), 'Boolean');
    
    tt(undefined, 'undefined');
    tt(null, 'null');
    tt(Symbol(), 'symbol');
    
    tt(function () {}, 'function');
    tt(function* () {}, 'function');
    tt(() => {}, 'function');
    
    tt([], 'Array');
    
    tt({}, 'Object');
    tt(Object.create(null), 'Object');
    
    tt(/x/, 'RegExp');
    
    tt(new Date(), 'Date');
    
    tt(new Set(), 'Set');
    tt(new WeakSet(), 'WeakSet');
    
    tt(new Map(), 'Map');
    tt(new WeakMap(), 'WeakMap');
    
    let c = class {};
    c.prototype[Symbol.toStringTag] = 'myClassType';
    tt(new c(), c.prototype[Symbol.toStringTag]);
    /* eslint-enable no-new-wrappers,prefer-arrow-callback,no-empty-function,symbol-description */
    
    t.end();
});