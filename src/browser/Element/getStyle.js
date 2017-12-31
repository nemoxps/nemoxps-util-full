let insertBetween = require('../../Array/insertBetween');


/**
 * Gets an arbitrary CSS property of an Element.
 * If the value is convertable to Number, a number will be returned.
 *
 * @param {Element} elem An Element.
 * @param {string} prop A property.
 * @param {boolean} [removeUnit=true] `true` if the unit (e.g. "px") should be removed.
 * @returns {(string|number|Array|Object)} The CSS value.
 */
let getStyle = (elem, prop, removeUnit = true) => {
    if (['padding', 'margin'].includes(prop))
      return ['top', 'right', 'bottom', 'left'].map((loc) => getStyle(elem, [prop, loc].join('-'), removeUnit));
    if (['border-width', 'border-style', 'border-color'].includes(prop))
      return ['top', 'right', 'bottom', 'left'].map((loc) => getStyle(elem, insertBetween(prop.split('-'), loc).join('-'), removeUnit));
    if (prop === 'border-radius')
      return ['top-left', 'top-right', 'bottom-right', 'bottom-left'].map((loc) => getStyle(elem, insertBetween(prop.split('-'), loc).join('-'), removeUnit));
    if (prop === 'border')
      return ['width', 'style', 'color', 'radius'].reduce((r, shorthand) => Object.assign(r, { [shorthand]: getStyle(elem, [prop, shorthand].join('-'), removeUnit) }), {});
    
    let value = document.defaultView.getComputedStyle(elem).getPropertyValue(prop);
    if (removeUnit && typeof value === 'string')
      value = value.replace(/px$/, '');
    if (value !== '' && !Number.isNaN(Number(value)))
      value = Number(value);
    return value;
};


module.exports = getStyle;