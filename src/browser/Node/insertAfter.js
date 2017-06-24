/**
 * Inserts a Node after another Node.
 *
 * @param {Node} what A Node to insert.
 * @param {Node} where A Node after which should be inserted.
 * @returns {Node} `what`.
 */
let insertAfter = (what, where) => {
    return where.parentNode.insertBefore(what, where.nextSibling);
};


module.exports = insertAfter;