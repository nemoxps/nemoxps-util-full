/**
 * Removes all whitespace-only Nodes in an Element.
 *
 * @param {Element} elem An Element.
 * @returns {Element} The original Element.
 */
let removeWhitespaceNodes = (elem) => {
    for (let i = 0, l = elem.childNodes.length; i < l; i++)
    {
      let node = elem.childNodes[elem.childNodes.length - l + i];
      let type = node.nodeType;
      if (type === Node.TEXT_NODE && node.textContent.trim() === '')
        elem.removeChild(node);
      else if (type === Node.ELEMENT_NODE)
        removeWhitespaceNodes(node);
    }
    
    return elem;
};


module.exports = removeWhitespaceNodes;