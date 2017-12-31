/**
 * ES proposal: `String.prototype.matchAll`.
 *
 * @param {string} str A string.
 * @param {RegExp} reg A RegExp.
 */
let matchAll = function* (str, reg) {
    let _lastIndex = reg.lastIndex;
    reg = new RegExp(reg);
    reg.lastIndex = _lastIndex;
    
    let prevIndex = -1;
    while (true)
    {
      let match = reg.exec(str);
      if (match === null || prevIndex === match.index)
        break;
      prevIndex = match.index;
      yield match;
    }
};


module.exports = matchAll;