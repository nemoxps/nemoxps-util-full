/**
 * ES proposal: `String.prototype.matchAll`.
 *
 * @param {string} str A string.
 * @param {RegExp} reg A RegExp.
 */
let matchAll = function* (str, reg) {
    reg = new RegExp(reg.source, 'g' + reg.flags.replace('g', ''));
    
    while (true)
    {
      let match = reg.exec(str);
      if (match === null)
        break;
      yield match;
    }
};


module.exports = matchAll;