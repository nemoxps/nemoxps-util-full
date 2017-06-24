/**
 * The inverse function of `Object.entries`.
 *
 * @param {Array[]} arr An array of object entries.
 * @param {Object} [acc={}] An accumulator.
 * @returns {Object} The object build from the entries.
 */
let fromEntries = (arr, acc = {}) => {
    return arr.reduce((r, [key, val]) => Object.assign(r, { [key]: val }), acc);
};


module.exports = fromEntries;