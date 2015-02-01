/** @jsx React.DOM */
var React = require('react');

var Thumbnail = require('../Thumbnail');

var BASE_SIZE = 300;
var CELL_COUNT = 4;

var Gallery = React.createClass({
  render: function () {
    var ContainerStyle = {
      'width': BASE_SIZE * (CELL_COUNT / 2),
      'height': BASE_SIZE * (CELL_COUNT / 2),
      'marginLeft': 'auto',
      'marginRight': 'auto'
    };

    var CellStyle = {
      'width': BASE_SIZE,
      'height': BASE_SIZE,
      'float': 'left'
    };

    return (
      <div className="clearfix" style={ContainerStyle}>
        <div style={CellStyle}>
          <Thumbnail src="dist/img/k.jpg" size="1" />
        </div>

        <div style={CellStyle}>
          <Thumbnail src="dist/img/k.jpg" size="2v" />
          <Thumbnail src="dist/img/k.jpg" size="2v" />
        </div>

        <div style={CellStyle}>
          <div style={{ 'float': 'left', 'width': (BASE_SIZE / 2) }}>
            <Thumbnail src="dist/img/k.jpg" size="3" />
            <Thumbnail src="dist/img/k.jpg" size="3" />
          </div>

          <Thumbnail src="dist/img/k.jpg" size="2h" />
        </div>

        <div style={CellStyle}>
          <Thumbnail src="dist/img/k.jpg" size="3" />
          <Thumbnail src="dist/img/k.jpg" size="3" />

          <Thumbnail src="dist/img/k.jpg" size="4" />
          <Thumbnail src="dist/img/k.jpg" size="4" />
          <Thumbnail src="dist/img/k.jpg" size="4" />
          <Thumbnail src="dist/img/k.jpg" size="4" />
          <Thumbnail src="dist/img/k.jpg" size="4" />
          <Thumbnail src="dist/img/k.jpg" size="4" />
          <Thumbnail src="dist/img/k.jpg" size="4" />
          <Thumbnail src="dist/img/k.jpg" size="4" />
        </div>
      </div>
    );
  }
});

module.exports = Gallery;