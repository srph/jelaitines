var ANIMATIONEND = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

/**
 * An animation mixin for this `special` carousel. Since we mark elements with
 * the pattern ```_n```, we can just iterate to create the animation_end
 * event listeners, and animation each one.
 *
 * @usage
 * 
 */
var AnimationMixin = {
  componentDidMount: function() {
    var pauseLength = this.$pauseLength;
    var elementsLength = this.$elementsLength;

    this.forceUpdate(function() {
      for ( var i = 1; i <= elementsLength ; i++ ) {
        if ( i == 1 ) {
          setTimeout( this._animate(1), pauseLength );
        }

        else { 
          one( this.refs['_' + (i - 1)].getDOMNode(), ANIMATIONEND, this._animate(i) );
        }
      }
    });
  },

  /**
   *
   */
  _animate: function(i) {
    var ref = '_' + i;

    return function() {
      animate( this.refs[ref].getDOMNode(), this.$animations[ref] );
    }.bind(this)
  },

  /**
   * The pause before starting the first animation (ms)
   * @return int ms
   */
  // $pauseLength: function() { return 1500; },

  /**
   * The number of elements to animate (ms)
   */
  // $elementsLength: function() { },

  /**
   * Animations
   */
  // $animations: function()
};

/**
 * Adds the opacity back, and then adds the animation class
 *
 * @see animation.css
 * @param {Element} el
 * @param {sring} className
 */
function animate(el, className) {
  el.style.opacity = '1.0';
  el.setAttribute('class', className + ' animated');
}

/**
 * Binds or adds (an) event listener(s) to an element for once.
 * Removes the event listener after firing once.
 *
 * @params {Element} el
 * @params {string} evts
 * @params {function} callback
 */
function one(el, evts, callback) {
  evts.split(' ').forEach(function(evt) {
    var fn = function(e) {
      callback(e);
      el.removeEventListener(evt, fn)
    }

    el.addEventListener(evt, fn);
  });
}

module.exports = AnimationMixin;