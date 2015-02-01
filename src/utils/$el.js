/**
 * Adds class to an element.
 *
 * @params {Element} el
 * @params {string} classes
 */
exports.addClass = function(el, classes) {
  if ( !classes.length ) {
    return;
  }

  classes = classes.split(' ');
  var existing = (el.getAttribute('class') || '') .split(' ');
  var className = '';

  classes.forEach(function(_class, i) {
    if ( existing.indexOf(_class) == -1 ) {
      className += _class;
    }
  });

  el.setAttribute( 'class', [existing, className].join(' ') );
}

/**
 * Binds or adds (an) event listener(s) to an element for once.
 * Removes the event listener after firing once.
 *
 * @params {Element} el
 * @params {string} evts
 * @params {function} callback
 */
exports.one = function(el, evts, callback) {
  evts.split(' ').forEach(function(evt) {
    var fn = function(e) {
      callback(e);
      el.removeEventListener(evt, fn)
    }

    el.addEventListener(evt, fn);
  });
}