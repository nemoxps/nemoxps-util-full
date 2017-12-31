/**
 * Zips the values of some arrays based on the position in the original array.
 *
 * @param {...Array} arr One or more arrays.
 * @returns {Array} The zipped arrays.
 */
let zip = (...arrs) => {
    return Array.from({ length: Math.max(...arrs.map((arr) => arr.length)) }, (_, index) => {
        return Array.from({ length: arrs.length }, (_, index2) => {
            return arrs[index2][index];
        });
    });
};


module.exports = zip;