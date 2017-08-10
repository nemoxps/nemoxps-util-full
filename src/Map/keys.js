/**
 * Like `Object.keys`, but for Maps.
 *
 * @param {Map} map A map.
 * @returns {Array} The map's keys.
 */
let keys = (map) => {
    let keys = [];
    map.forEach((val, key) => {
        keys.push(key);
    });
    return keys;
};


module.exports = keys;