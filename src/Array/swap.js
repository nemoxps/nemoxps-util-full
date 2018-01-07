/**
 * Swaps two values in an array.
 * Mutates the original array.
 *
 * @param {Array} arr An array.
 * @param {int} i A first index.
 * @param {int} j A second index.
 * @returns {Array} The original array.
 */
let swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
};


module.exports = swap;