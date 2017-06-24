/**
 * Like `Array.prototype.filter`, but filters only the map's values.
 *
 * @param {Map} map A map.
 * @param {function} iteratee A function that is called for each element.
 * @returns {Array} The filtered map values.
 */
let filterValues = (map, iteratee) => {
    let values = [];
    map.forEach((val, key, map) => {
        if (iteratee(val, key, map))
          values.push(val);
    });
    return values;
};


module.exports = filterValues;