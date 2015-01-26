/** @jsx React.DOM */
var React = require('react');
var objectAssign = require('object-assign');

var _width = 150;

var ContainerStyle = {
  'overflow': 'hidden',
  'height': '35px',
  'width': _width + 'px',
  'borderRadius': '50%',
  'background': '#ddd'
};

var Loading = React.createClass({
  /**
   * percentage - Loading %
   */
  getInitialState: function() {
    return { percentage: true };
  },

  render: function () {
    var pxpp = _width / 100; // pixel per percentage (w 150 / mxp 100)
    var percentage = this.state.percentage * pxpp; // (1 * 1.5)

    var BarStyle = {
      'height': '35px',
      'width': percentage + 'px',
      'background': '#FF9999',
      'transition': '0.5s all',
      'WebkitTransition': '0.5s all',
      'MozTransition': '0.5s all',
      'OTransition': '0.5s all',
      'msTransition': '0.5s all'
    };

    return (
      <div>
        <div style={ContainerStyle}>
          <div style={BarStyle}></div>
        </div>
      </div>
    );
  }
});

module.exports = Loading;
