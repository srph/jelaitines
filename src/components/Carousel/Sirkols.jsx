/** @jsx React.DOM */
var React = require('react');
var objectAssign = require('object-assign');

var HideStyle = require('./_hide');
var animate = require('./_animate');
var one = require('../../utils/one');

var TRANSITION_END_EVT = require('../../utils/transition-end');
var ANI = { _1: 'bounceIn', _2: 'bounceIn', _3: 'bounceIn' };

// Thumbnail styling
var ThumbnailStyle = {
  'position': 'absolute',
  'background': '#ddd',
  'borderRadius': '50%'
};

// Various size for each thumbnail
var L1 = propSize('256px');
var L2 = propSize('128px');
var L3 = propSize('64px');

var Sirkols = React.createClass({
  /**
   * {animate.css}
   */
  componentDidMount: function() {
    this.forceUpdate(function() {
      var refs = this.refs;

      setTimeout(this._1, 1500);
      one(refs._1.getDOMNode(), TRANSITION_END_EVT, this._2);
      one(refs._2.getDOMNode(), TRANSITION_END_EVT, this._3);
    });
  },

  render: function () {
    var IMGStyle = {
      '1': objectAssign({}, ThumbnailStyle, L1),
      '2': objectAssign({ 'top': '50px', 'right': '5px' }, ThumbnailStyle, L2),
      '3': objectAssign({ 'top': 0, 'right': '100px' }, ThumbnailStyle, L3)
    };

    var ContainerStyle =  {
      'position': 'relative',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'height': 256,
      'width': 396
    };

    return (
      <div style={ContainerStyle}>
        <div ref={'_1'} style={HideStyle}> <img src="dist/img/t.jpg" style={IMGStyle['1']} /> </div>
        <div ref={'_2'} style={HideStyle}> <img src="dist/img/j.jpg" style={IMGStyle['2']} /> </div>
        <div ref={'_3'} style={HideStyle}> <img src="dist/img/k.jpg" style={IMGStyle['3']} /> </div>
      </div>
    );
  },

  /**
   * {animate.css}
   */
  _1: function() { animate(this.refs._1.getDOMNode(), ANI._1 ); },
  _2: function() { animate(this.refs._2.getDOMNode(), ANI._2 ); },
  _3: function() { animate(this.refs._3.getDOMNode(), ANI._3 ); }
});

/**
 * Proportional w/h
 */
function propSize(s) { return { 'width': s, 'height': s }; }

module.exports = Sirkols;
