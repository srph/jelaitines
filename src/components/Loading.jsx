/** @jsx React.DOM */
var React = require('react');
var objectAssign = require('object-assign');

var px = require('../utils/px');

// Loading bar colors
// REDDISH, BLUISH, GREENISH
var COLORS = ['#FF9999', 'rgb(86, 167, 245)', 'rgb(74, 226, 104)'];
var WIDTH = 400;
var HEIGHT = 100;

var ContainerStyle = {
  // Center
  'marginLeft': 'auto',
  'marginRight': 'auto',

  'overflow': 'hidden',
  'height': px(HEIGHT),
  'width': px(WIDTH),
  'borderRadius': '20px',
  'background': '#ddd',
};

var Loading = React.createClass({
  propTypes: {
    // If this slide is already active
    active: React.PropTypes.bool.isRequired
  },

  getInitialState: function() {
    return {
      // Loading %
      percentage: 0,
      // Phases of loading
      // Phase 1, 2, 3
      phase: 0
    };
  },

  /**
   * Start and clear the loading progress
   */
  componentDidMount: function() { this._load(); },
  componentWillUnmount: function() { this._unload(); },

  render: function () {
    var percentage = this.state.percentage;
    var phase = this.state.phase;
    var pxpp = WIDTH / 100; // pixel per percentage (w 150 / mxp 100)
    var tpx = percentage * pxpp; // (1 * 1.5)

    var BarStyle = {
      'height': px(HEIGHT),
      'width': px(tpx),
      'background': COLORS[phase - 1],

      'WebkitTransition': '1s all cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      'MozTransition': '1s all cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      'OTransition': '1s all cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      'msTransition': '1s all cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      'transition': '1s all cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    };

    return (
      <div>
        <div style={ContainerStyle}>
          <div style={BarStyle}></div>
        </div>
      </div>
    );
  },

  /**
   * Starts the loading progress.
   */
  _load: function() {
    this._unload();

    var percentage = this.state.percentage;
    var duration = (percentage <= 50) ? 1500 : 2500;
    var incremented = percentage + (percentage < 50 ? 25 : 50);
    var phase = this.state.phase + 1;

    this.$loader = setTimeout(function() {
      this.setState({ percentage: incremented, phase: phase }, function() {
        if ( this.state.percentage < 100 ) {
          this._load();
        }
      });
    }.bind(this), duration);
  },

  /**
   * Clears the loading progress
   */
  _unload: function() {
    if ( this.$loader ) {
      clearTimeout(this.$loader);
    }
  }
});

module.exports = Loading;
