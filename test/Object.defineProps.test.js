let test = require('tape');

let defineProps = require('../src/Object/defineProps');
let { c, e, w, g, s, gs } = defineProps.flags;


test('Object#defineProps', (t) => {
    let fn = defineProps;
    let toComparable = (obj) => Object.entries(Object.getOwnPropertyDescriptors(obj)).map(([key, descriptor]) => {
        if ('get' in descriptor && descriptor.get)
          descriptor.get = true;
        if ('set' in descriptor && descriptor.set)
          descriptor.set = true;
        return [key, descriptor];
    }).reduce((r, [key, descriptor]) => Object.assign(r, { [key]: descriptor }), {});
    let tt = (arg, expected, msg) => {
        t.deepEqual(toComparable(fn({}, arg)), toComparable(Object.defineProperties({}, expected)), msg);
    };
    
    /* eslint-disable getter-return */
    tt(
        { key1: ['val1'] },
        { key1: { value: 'val1' } }
    );
    tt(
        { key2: ['val2', c] },
        { key2: { value: 'val2', configurable: true } }
    );
    tt(
        { key3: ['val3', e] },
        { key3: { value: 'val3', enumerable: true } }
    );
    tt(
        { key4: ['val4', w] },
        { key4: { value: 'val4', writable: true } }
    );
    tt(
        { key5: [() => {}, g] },
        { key5: { get() {} } }
    );
    tt(
        { key6: [() => {}, s] },
        { key6: { set() {} } }
    );
    tt(
        { key7: [[() => {}, () => {}], gs] },
        { key7: { get() {}, set() {} } }
    );
    tt(
        { key8: ['val8', e | w] },
        { key8: { value: 'val8', enumerable: true, writable: true } }
    );
    tt(
        { key9: [() => {}, g | e | c] },
        { key9: { get() {}, enumerable: true, configurable: true } }
    );
    /* eslint-enable getter-return */
    
    t.end();
});