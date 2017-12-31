let objMapValues = require('./Object/mapValues');
let type = require('./type');


/**
 * Clones (almost) any variable.
 * Supports:
 *  - (string,number,boolean,undefined,null,NaN)
 *  - String,Number,Boolean,Array,Object,RegExp,Date,Set,Map
 *    Does not clone RegExp's `.lastIndex` property.
 * Supports not:
 *  - function,symbol,WeakSet,WeakMap(, anything not mentioned above)
 *    (just returns the variable in this case)
 *
 * @param {*} o A variable.
 * @returns {*} A clone of `o`.
 */
let clone = (o) => {
    if (o === null || typeof o !== 'object')
      return o;
    
    switch (type(o))
    {
      case 'Array':
        return o.map(clone);
      
      case 'Object':
        return Object.create(
            Object.getPrototypeOf(o),
            objMapValues(Object.getOwnPropertyDescriptors(o), (descriptor) => {
                if (Object.hasOwnProperty.call(descriptor, 'value'))
                  descriptor.value = clone(descriptor.value);
                return descriptor;
            })
        );
      
      case 'RegExp':
        return new RegExp(o);
      
      case 'Date':
        return new Date(o);
      
      case 'String':
        return new String(o); // eslint-disable-line no-new-wrappers
      
      case 'Number':
        return new Number(o); // eslint-disable-line no-new-wrappers
      
      case 'Boolean':
        return new Boolean(o); // eslint-disable-line no-new-wrappers
      
      case 'Set':
        return new Set([...o].map((key) => clone(key)));
      
      case 'Map':
        return new Map([...o].map(([key, val]) => [clone(key), clone(val)]));
      
      default:
        return o;
    }
};


module.exports = clone;