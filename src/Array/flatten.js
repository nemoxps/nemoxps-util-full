/**
 * Flattens an array to an arbitrary depth.
 *
 * @param {Array} arr An array.
 * @param {(number|boolean)} [depth=1]
 *        {number} A depth.
 *        {boolean} `true` equals `Infinity`, `false` equals `0`.
 * @returns {Array} The flattened array.
 * @throws {Error} Array#flatten: `depth` can't be less than `0`.
 */
let flatten = (arr, depth = 1) => {
    if (depth < 0)
      throw new Error('Array#flatten: `depth` can\'t be less than `0`.');
    
    if (typeof depth === 'boolean')
      depth = (depth) ? Infinity : 0;
    
    let r = [];
    for (let val of arr)
      if (depth > 0 && Array.isArray(val))
        r.push(...(depth === 1) ? val : flatten(val, depth - 1));
      else
        r.push(val);
    
    return r;
};


module.exports = flatten;