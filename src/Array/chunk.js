/**
 * Chunks an array into smaller arrays.
 *
 * @param {Array} arr An array.
 * @param {int} size A chunk size.
 * @returns {Array} The chunked array.
 * @throws {Error} Array#chunk: `size` can't be less than `1`.
 */
let chunk = (arr, size) => {
    if (size < 1)
      throw new Error('Array#chunk: `size` can\'t be less than `1`.');
    
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) => {
        return arr.slice(index * size, index * size + size);
    });
};


module.exports = chunk;