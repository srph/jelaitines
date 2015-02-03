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
      'textAlign': 'center',
      'width': 350
    };

    return (
      <div style={ContainerStyle}>
        <div ref={'_5'} style={HiddenStyle}> <i className="ion-heart" /> </div>
        <div ref={'_1'} style={HiddenStyle}> <h5><span className="special-type">Mahal Ko</span></h5> </div>
        <div ref={'_2'} style={HiddenStyle}> <h1 className="highlight-type u-text-center"> Happy </h1> </div>
        <div ref={'_3'} style={HiddenStyle}> <h3 className="highlight-type"> Valentines </h3> </div>
        <div ref={'_4'} style={HiddenStyle}> <h5><span className="l-type">Jealian Lang Sapat Na</span></h5> </div>
      </div>
    );
  },

  /**
   * {AnimationMixin}
   */
  $pauseLength: 1500,
  $elementsLength: 5,
  $animations: {
    _1: 'flipInX',
    _2: 'zoomInUp',
    _3: 'lightSpeedIn',
    _4: 'fadeInLeft',
    _5: 'fadeInDown'
  }
});

module.exports = Last;
