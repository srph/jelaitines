/**
 * Adjusts the given index to not
 * exceed 0 and the last index.
 *
 * @param i Incremented / decremented index
 * @param m Number of elements
 * @returns int
 */
module.exports = function(i, m) { return i <= m - 1 && i >= 0 ? i : (i < 0 ? m : 0); }