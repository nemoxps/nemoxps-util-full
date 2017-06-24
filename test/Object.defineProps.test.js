let test = require('tape');

let { defineProps, c, e, w, g, s, gs } = require('../src/Object/defineProps');


test('Object.defineProps', (t) => {
    let replaceFunctions = (propertyDescriptors) => {
        return Object.entries(propertyDescriptors).map(([key, descriptor]) => {
            if ('get' in descriptor && descriptor.get)
              descriptor.get = true;
            if ('set' in descriptor && descriptor.set)
              descriptor.set = true;
            return [key, descriptor];
        }).reduce((r, [key, descriptor]) => Object.assign(r, { [key]: descriptor }), {});
    };
    let toComparable = (obj) => replaceFunctions(Object.getOwnPropertyDescriptors(obj));
    
    t.deepEqual(
        toComparable(defineProps({}, {
            key1: ['val1'],
        })),
        toComparable(Object.defineProperties({}, {
            key1: { value: 'val1' },
        }))
    );
    t.deepEqual(
        toComparable(defineProps({}, {
            key2: ['val2', c],
        })),
        toComparable(Object.defineProperties({}, {
            key2: { value: 'val2', configurable: true },
        }))
    );
    t.deepEqual(
        toComparable(defineProps({}, {
            key3: ['val3', e],
        })),
        toComparable(Object.defineProperties({}, {
            key3: { value: 'val3', enumerable: true },
        }))
    );
    t.deepEqual(
        toComparable(defineProps({}, {
            key4: ['val4', w],
        })),
        toComparable(Object.defineProperties({}, {
            key4: { value: 'val4', writable: true },
        }))
    );
    t.deepEqual(
        toComparable(defineProps({}, {
            key5: [() => {}, g],
        })),
        toComparable(Object.defineProperties({}, {
            key5: { get() {} },
        }))
    );
    t.deepEqual(
        toComparable(defineProps({}, {
            key6: [() => {}, s],
        })),
        toComparable(Object.defineProperties({}, {
            key6: { set() {} },
        }))
    );
    t.deepEqual(
        toComparable(defineProps({}, {
            key7: [[() => {}, () => {}], gs],
        })),
        toComparable(Object.defineProperties({}, {
            key7: { get() {}, set() {} },
        }))
    );
    t.deepEqual(
        toComparable(defineProps({}, {
            key8: ['val8', e | w],
        })),
        toComparable(Object.defineProperties({}, {
            key8: { value: 'val8', enumerable: true, writable: true },
        }))
    );
    t.deepEqual(
        toComparable(defineProps({}, {
            key9: [() => {}, g | e | c],
        })),
        toComparable(Object.defineProperties({}, {
            key9: { get() {}, enumerable: true, configurable: true },
        }))
    );
    
    t.end();
});