/**
 * Like `Array.prototype.filter`, but returns the indexes of the entries that pass the `iteratee` function.
 *
 * @param {Array} arr An array.
 * @param {function} iteratee A function that is called for each element.
 * @returns {int[]} The indexes.
 */
let filterIndex = (arr, iteratee) => {
    return arr.reduce((r, val, index, arr) => {
        if (iteratee(val, index, arr))
          r.push(index);
        return r;
    }, []);
};


module.exports = filterIndex;