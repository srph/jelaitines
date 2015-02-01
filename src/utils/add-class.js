module.exports = function(el, classes) {
  if ( !classes.length ) {
    return;
  }

  classes = classes.split(' ');
  var existing = (el.getAttribute('class') || '') .split(' ');
  var className = '';

  console.log(existing);

  classes.forEach(function(_class, i) {
    if ( existing.indexOf(_class) == -1 ) {
      className += _class;
    }
  });

  el.setAttribute( 'class', [existing, className].join(' ') );
}