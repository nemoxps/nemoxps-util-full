/**
 * Like `Object.entries`, but for Maps.
 *
 * @param {Map} map A map.
 * @returns {Array[]} The map's entries.
 */
let entries = (map) => {
    let entries = [];
    map.forEach((val, key) => {
        entries.push([key, val]);
    });
    return entries;
};


module.exports = entries;