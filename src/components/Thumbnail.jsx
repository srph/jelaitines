/** @jsx React.DOM */
var React = require('react');

var SIZES = ['1', '2h', '2v', '3', '4'];
var BASE_SIZE = 300;

var Thumbnail = React.createClass({
  propTypes: {
    /**
     * See to it that the `size` prop is limited
     * only by 1, 2h, 2v, 4.
     */
    size: function(params, paramName) {
      var value = params[paramName];

      if ( SIZES.indexOf( value  ) == -1 ) {
        return new Error('Size provided is invalid!');
      }
    },

    src: React.PropTypes.string.isRequired
  },

  render: function () {
    var src = this.props.src;
    var size = this.props.size;

    var ThumbnailStyle = {
      'width': getWidth(size),
      'height': getHeight(size),
      'float': 'left',
      'background': 'url(' + src + ')',
      'backgroundSize': 'cover'
    };

    return (
      <div style={ThumbnailStyle}>
      </div>
    );
  }
});

/**
 * Get height for the provided size
 */
function getHeight(size) {
  return BASE_SIZE / (function() {
    switch(size) {
      case '1':
      case '2h':
        return 1;
      case '2v':
      case '3':
        return 2;
      case '4':
        return 4;
    }
  })();
}

/**
 * Get width for the provided size
 */
function getWidth(size) {
  return BASE_SIZE / (function() {
    switch(size) {
      case '1':
      case '2v':
        return 1;
      case '2h':
      case '3':
        return 2;
      case '4':
        return 4;
    }
  })();
}

module.exports = Thumbnail;