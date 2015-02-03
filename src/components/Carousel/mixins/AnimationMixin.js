var ANIMATIONEND = [
  'webkitAnimationEnd',
  'mozAnimationEnd',
  'MSAnimationEnd',
  'oanimationend',
  'animationend'
].join(' ');

/**
 * An animation mixin for this `special` carousel. Since we mark elements with
 * the pattern ```_n```, we can just iterate to create the animation_end
 * event listeners, and animation each one.
 */
var AnimationMixin = {
  componentDidMount: function() {
    var pauseLength = this.$pauseLength();
    var elementsLength = this.$elementsLength();

    for ( var i = 1; i <= ; i++ ) {
      if ( i == 1 ) {
        setTimeout( this.animate('1'), this.$pauseLength );
      }

      else { 
        one( refs['_' + (i - 1)].getDOMNode(), ANIMATIONEND, this.animate(i) );
      }
    }
  },

  /**
   *
   */
  _animate: function(i) {
    var ref = '_' + i;

    return function() {
      animate(this.refs[ref].getDOMNode(), ANIMATIONS[ref] );
    }
  },

  /**
   * The pause before starting the first animation (ms)
   * @return int ms
   */
  $$pauseLength: function() { return 1500; },

  /**
   * The number of elements to animate (ms)
   */
  $$elementsLength: function() { }
};

module.exports = AnimationMixin;