/**
 * Like `Array.prototype.filter`, but filters only the map's keys.
 *
 * @param {Map} map A map.
 * @param {function} iteratee A function that is called for each element.
 * @returns {Array} The filtered map keys.
 */
let filterKeys = (map, iteratee) => {
    let keys = [];
    map.forEach((val, key, map) => {
        if (iteratee(val, key, map))
          keys.push(key);
    });
    return keys;
};


module.exports = filterKeys;