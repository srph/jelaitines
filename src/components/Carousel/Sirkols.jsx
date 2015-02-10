/** @jsx React.DOM */
var React = require('react');
var objectAssign = require('object-assign');

var AnimationMixin = require('./mixins/AnimationMixin');
var HiddenStyle = require('./utils/hidden.css');

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
  mixins: [AnimationMixin],
  
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
      <div>
        <div style={ContainerStyle}>
          <div ref={'_1'} style={HiddenStyle}> <img src="dist/img/t.jpg" style={IMGStyle['1']} /> </div>
          <div ref={'_2'} style={HiddenStyle}> <img src="dist/img/j.jpg" style={IMGStyle['2']} /> </div>
          <div ref={'_3'} style={HiddenStyle}> <img src="dist/img/k.jpg" style={IMGStyle['3']} /> </div>
        </div>

        <div style={{ 'textAlign': 'center' }}>
          <div ref={'_4'} style={HiddenStyle}> <h5><span className="l-type">Hello</span></h5> </div>
          <div ref={'_5'} style={HiddenStyle}> <h4><span className="special-type">Ganda</span></h4> </div>
        </div>
      </div>
    );
  },

  $pauseLength: 1500,
  $elementsLength: 5,
  $animations: { _1: 'bounceIn', _2: 'bounceIn', _3: 'bounceIn', _4: 'fadeInUp', _5: 'fadeInDown' }
});

/**
 * Proportional w/h
 */
function propSize(s) { return { 'width': s, 'height': s }; }

module.exports = Sirkols;
