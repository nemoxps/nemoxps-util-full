/**
 * Gets the type of any variable.
 * Supports all `typeof` returns:
 *  - string,number,boolean,function,undefined,null,symbol
 * Supports all `Object.prototype.toString.call(...)` returns:
 *  - built-in objects: String,Number,Boolean,Array,Object,RegExp,Date,Set,WeakSet,Map,WeakMap (and other built-in's)
 *  - other custom returns (`Symbol.toStringTag`)
 * Supports also:
 *  - NaN
 *
 * @param {*} o A variable.
 * @returns {string} The type of `o`.
 */
let type = (o) => {
    if (o === null)
      return 'null';
    if (Number.isNaN(o))
      return 'NaN';
    let t = typeof o;
    if (t !== 'object')
      return t;
    return Object.prototype.toString.call(o).slice(8, -1);
};


module.exports = type;