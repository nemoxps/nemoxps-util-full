let flagGenerator = require('../flagGenerator');
let mapValues = require('./mapValues');


let [c, e, w, g, s] = flagGenerator(),
    gs = g | s;
let getDescriptor = (value, mask) => {
    let descriptor = { configurable: !!(mask & c), enumerable: !!(mask & e) };
    if (mask & gs)
      Object.assign(descriptor, { get: value[0], set: value[1] });
    else
      Object.assign(descriptor, { value, writable: !!(mask & w) });
    return descriptor;
};

/**
 * Shorthand for handling with property descriptors.
 * Similar to `Object.defineProperties`, but lesser writing work.
 * Mutates the original object.
 *
 * @param {Object} obj An object.
 * @param {Object} properties
 *        The keys are the same as for `Object.defineProperties`, but the values are arrays.
 *        The first array item is the value, the second is the flag.
 *        If the flag is `gs`, the values need to be wrapped in an array.
 *        The flag is optional.
 * @returns {Object} The original object.
 */
let defineProps = (obj, properties) => {
    return Object.defineProperties(obj, mapValues(properties, ([value, mask = 0]) => {
        if (mask & g && !(mask & s))
          value = [value, undefined];
        else if (mask & s && !(mask & g))
          value = [undefined, value];
        return getDescriptor(value, mask);
    }));
};


module.exports = { defineProps, c, e, w, g, s, gs };