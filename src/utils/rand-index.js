/**
 * A randomly generated value (from 0 to [l - 1])
 * @param l Index of last item
 */
module.exports = function(l) { return Math.floor( Math.random() * (l - 1) + 0 ); }