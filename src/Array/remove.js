/**
 * Removes all values in an array that pass the `iteratee` function.
 * Mutates the original array.
 *
 * @param {Array} arr An array.
 * @param {function} iteratee A function that is called for each element.
 * @returns {Array} The removed values.
 */
let remove = (arr, iteratee) => {
    let r = [];
    let indexes = [];
    for (let i = 0, l = arr.length; i < l; i++)
      if (iteratee(arr[i], i, arr))
      {
        r.push(arr[i]);
        indexes.push(i);
      }
    
    let l = indexes.length;
    while (l--)
      arr.splice(indexes[l], 1);
    
    return r;
};


module.exports = remove;