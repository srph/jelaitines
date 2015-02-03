var one = require('../../../utils/$el').one;
var animate = require('../utils/animate');

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
    var ANIMATIONEND = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

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

module.exports = AnimationMixin;