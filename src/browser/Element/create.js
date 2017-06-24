/**
 * Shortcut for creating new elements.
 *
 * @param {string} tag A tag name including id and classes (querySelector syntax).
 * @param {(string|number|Object)} [textContent]
 *        {(string|number)} A textContent value.
 *        {Object} An object containing element properties as keys and element values as values.
 *                 Events may be registered in `events` (without `on`-prefixes).
 * @returns {Element} The created element.
 */
let create = (tag, textContent = '') => {
    let tagName = tag.replace(/[#.].+$/, '');
    let id = (tag.match(/#[\w-]+/) || [''])[0].slice(1);
    let classNames = (tag.match(/\.[\w-]+/g) || []).map((classq) => classq.slice(1));
    let elem = document.createElement(tagName);
    if (id)
      elem.id = id;
    if (classNames.length)
      elem.classList.add(...classNames);
    
    if (typeof textContent !== 'object')
      elem.textContent = textContent;
    else
      for (let [key, val] of Object.entries(textContent))
        if (typeof val !== 'object')
          elem[key] = val;
        else if (key === 'events')
          Object.entries(val).forEach(([eventType, fn]) => {
              elem.addEventListener(eventType, fn);
          });
        else
          Object.assign(elem[key], val);
    
    return elem;
};


module.exports = create;