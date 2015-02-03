/** @jsx React.DOM */
'use strict';
var React = require('react');
var AnimationMixin = require('./mixins/AnimationMixin');
var HiddenStyle = require('./utils/hidden.css');

var Last = React.createClass({
  mixins: [AnimationMixin],

  render: function (argument) {
    var ContainerStyle = {
      'position': 'relative',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'width': 350
    };

    return (
      <div style={ContainerStyle} className="clearfix">
        <div style={{ 'float': 'left', 'textAlign': 'left' }}>
          <div ref={'_1'} style={HiddenStyle}> <h1 className="highlight-type u-text-center"> Happy </h1> </div>
          <div ref={'_2'} style={HiddenStyle}> <h3 className="highlight-type"> Valentines </h3> </div>
        </div>

        <div style={{ 'float': 'right', 'marginLeft': '5px', 'textAlign': 'center' }}>
          <h1> &#33; </h1>
        </div>
      </div>
    );
  },

  /**
   * {AnimationMixin}
   */
  $pauseLength: 1000,
  $elementsLength: 2,
  $animations: { _1: 'bounceInDown', _2: 'zoomInUp' }
});

module.exports = Last;
