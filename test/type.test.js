let test = require('tape');

let type = require('../src/type');


test('type', (t) => {
    /* eslint-disable no-new-wrappers,prefer-arrow-callback,no-empty-function,no-new-func,no-array-constructor,no-new-object,symbol-description */
    t.equal(type(''), 'string');
    t.equal(type(new String('')), 'String');
    
    t.equal(type(0), 'number');
    t.equal(type(new Number(0)), 'Number');
    t.equal(type(NaN), 'NaN');
    
    t.equal(type(true), 'boolean');
    t.equal(type(new Boolean(true)), 'Boolean');
    
    t.equal(type(undefined), 'undefined');
    t.equal(type(null), 'null');
    t.equal(type(Symbol()), 'symbol');
    
    t.equal(type(function () {}), 'function');
    t.equal(type(() => {}), 'function');
    t.equal(type(function* () {}), 'function');
    t.equal(type(new Function()), 'function');
    
    t.equal(type([]), 'Array');
    t.equal(type(new Array()), 'Array');
    
    t.equal(type({}), 'Object');
    t.equal(type(new Object()), 'Object');
    t.equal(type(Object.create(null)), 'Object');
    
    t.equal(type(/x/), 'RegExp');
    t.equal(type(new RegExp('x')), 'RegExp');
    
    t.equal(type(new Date()), 'Date');
    
    t.equal(type(new Set()), 'Set');
    t.equal(type(new WeakSet()), 'WeakSet');
    
    t.equal(type(new Map()), 'Map');
    t.equal(type(new WeakMap()), 'WeakMap');
    
    let c = class {};
    c.prototype[Symbol.toStringTag] = 'myClassType';
    t.equal(type(new c()), c.prototype[Symbol.toStringTag]);
    /* eslint-enable no-new-wrappers,prefer-arrow-callback,no-empty-function,no-new-func,no-array-constructor,no-new-object,symbol-description */
    
    t.end();
});