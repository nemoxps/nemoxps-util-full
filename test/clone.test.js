let test = require('tape');

let clone = require('../src/clone');


test('clone', (t) => {
    let o, c;
    
    /* eslint-disable no-new-wrappers,symbol-description */
    o = 'str'; c = clone(o);
    t.equal(c, o);
    o = new String('str'); c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    
    o = 0; c = clone(o);
    t.equal(c, o);
    o = new Number(0); c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    o = NaN; c = clone(o);
    t.equal(Object.is(c, o), true);
    
    o = true; c = clone(o);
    t.equal(c, o);
    o = new Boolean(true); c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    
    o = undefined; c = clone(o);
    t.equal(c, o);
    o = null; c = clone(o);
    t.equal(c, o);
    o = Symbol(); c = clone(o);
    t.equal(c, o);
    
    o = () => {}; c = clone(o);
    t.equal(c, o);
    
    o = [0]; c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    
    o = { 0: 0 }; c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    t.equal(Object.getPrototypeOf(c), Object.getPrototypeOf(o));
    o = Object.assign(Object.create(null), { 0: 0 }); c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    t.equal(Object.getPrototypeOf(c), Object.getPrototypeOf(o));
    o = new class {
        construcor() {
            this[0] = 0;
        }
    }(); c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    t.equal(Object.getPrototypeOf(c), Object.getPrototypeOf(o));
    
    o = /x/gi; c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    o.exec('x'); c = clone(o);
    t.notEqual(c.lastIndex, o.lastIndex);
    
    o = new Date(); c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    
    o = new Set([{ 0: 0 }]); c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    o = new WeakSet([{ 0: 0 }]); c = clone(o);
    t.equal(c, o);
    
    o = new Map([[{ 0: 0 }, { 1: 1 }]]); c = clone(o);
    t.notEqual(c, o);
    t.deepEqual(c, o);
    o = new WeakMap([[{ 0: 0 }, { 1: 1 }]]); c = clone(o);
    t.equal(c, o);
    /* eslint-enable no-new-wrappers,symbol-description */
    
    t.end();
});