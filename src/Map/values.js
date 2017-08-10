/**
 * Like `Object.values`, but for Maps.
 *
 * @param {Map} map A map.
 * @returns {Array} The map's values.
 */
let values = (map) => {
    let values = [];
    map.forEach((val) => {
        values.push(val);
    });
    return values;
};


module.exports = values;