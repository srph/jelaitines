/** @jsx React.DOM */
var React = require('react');

var AnimationMixin = require('./mixins/AnimationMixin');
var HiddenStyle = require('./utils/hidden.css');

var Second = React.createClass({
  mixins: [AnimationMixin],

  render: function () {
    return (
      <div className="u-uppercase u-text-center">
        <div ref={'_1'} style={HiddenStyle}> <h4> <span className="special-type">Your</span> </h4> </div>
        <div ref={'_2'} style={HiddenStyle}> <h1 className="highlight-type u-nocase"> Smile </h1> </div>
        <div ref={'_3'} style={HiddenStyle}> <h5> <span className="l-type">Stole My Heart</span> </h5> </div>
      </div>
    );
  },

  $pauseLength: 1500,
  $elementsLength: 3,
  $animations: { _1: 'bounceInDown', _2: 'zoomInUp', _3: 'bounceIn' }
});

module.exports = Second;