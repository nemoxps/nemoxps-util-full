/**
 * Gets the index of an Element in the containing Element (using `children`, not `childNodes`).
 *
 * @param {Element} elem An Element.
 * @returns {number} The index.
 */
let childIndex = (elem) => {
    return Array.prototype.indexOf.call(elem.parentNode.children, elem);
};


module.exports = childIndex;