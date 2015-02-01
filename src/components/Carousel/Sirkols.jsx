/** @jsx React.DOM */
var React = require('react');
var objectAssign = require('object-assign');

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
        <img src="dist/img/t.jpg" style={IMGStyle['1']} />
        <img src="dist/img/j.jpg" style={IMGStyle['2']} />
        <img src="dist/img/k.jpg" style={IMGStyle['3']} />
      </div>
    );
  }
});

/**
 * Proportional w/h
 */
function propSize(s) { return { 'width': s, 'height': s }; }

module.exports = Sirkols;
