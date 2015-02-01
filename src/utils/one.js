/**
 * Adds (an) event listeners to an element
 * And then removes it after firing.
 */
module.exports = function(el, evts, callback) {
  evts.split(' ').forEach(function(evt) {
    var fn = function(e) {
      callback(e);
      el.removeEventListener(evt, fn)
    }

    el.addEventListener(evt, fn);
  });
}