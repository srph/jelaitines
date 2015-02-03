/** @jsx React.DOM */
var React = require('react');

var AnimationMixin = require('./mixins/AnimationMixin');
var Thumbnail = require('../Thumbnail');

/**
 * {animate.css}
 */
var HiddenStyle = require('./utils/hidden.css');

// Base size of each cell
var BASE_SIZE = 300;
// Number of cells (4 since we divide one square to four)
var CELL_COUNT = 4;

var Gallery = React.createClass({
  mixins: [AnimationMixin],

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
          <div ref={'_1'} style={HiddenStyle}> <Thumbnail src="dist/img/set-1/1.jpg" size="1" /> </div>
        </div>

        <div style={CellStyle}>
          <div ref={'_2'} style={HiddenStyle}> <Thumbnail src="dist/img/set-2/1.jpg" size="2v" /> </div>
          <div ref={'_3'} style={HiddenStyle}> <Thumbnail src="dist/img/set-2/2.jpg" size="2v" /> </div>
        </div>

        <div style={CellStyle}>
          <div style={{ 'float': 'left', 'width': (BASE_SIZE / 2) }}>
            <div ref={'_6'} style={HiddenStyle}> <Thumbnail src="dist/img/set-3/2.jpg" size="3" /> </div>
            <div ref={'_5'} style={HiddenStyle}> <Thumbnail src="dist/img/set-3/3.jpg" size="3" /> </div>
          </div>

          <div ref={'_4'} style={HiddenStyle}> <Thumbnail src="dist/img/set-3/1.jpg" size="2h" /> </div>
        </div>

        <div style={CellStyle}>
          <div ref={'_9'} style={HiddenStyle}> <Thumbnail src="dist/img/set-4/2.jpg" size="3" /> </div>
          <div ref={'_8'} style={HiddenStyle}> <Thumbnail src="dist/img/set-4/1.jpg" size="3" /> </div>

          <div ref={'_12'} style={HiddenStyle}> <Thumbnail src="dist/img/set-4/3.jpg" size="4" /> </div>
          <div ref={'_11'} style={HiddenStyle}> <Thumbnail src="dist/img/set-4/4.jpg" size="4" /> </div>
          <div ref={'_10'} style={HiddenStyle}> <Thumbnail src="dist/img/set-4/5.jpg" size="4" /> </div>
          <div ref={'_16'} style={HiddenStyle}> <Thumbnail src="dist/img/set-4/6.jpg" size="4" /> </div>
          <div ref={'_13'} style={HiddenStyle}> <Thumbnail src="dist/img/set-4/7.jpg" size="4" /> </div>
          <div ref={'_7'} style={HiddenStyle}> <Thumbnail src="dist/img/set-4/8.jpg" size="4" /> </div>
          <div ref={'_14'} style={HiddenStyle}> <Thumbnail src="dist/img/set-4/9.jpg" size="4" /> </div>
          <div ref={'_15'} style={HiddenStyle}> <Thumbnail src="dist/img/set-4/10.jpg" size="4" /> </div>
        </div>
      </div>
    );
  },

  /**
   * AnimationMixin
   */
  $pauseLength: 1500,
  $elementsLength: 16,
  $animations: {
    _1: 'bounceInDown',
    _2: 'zoomInUp',
    _3: 'bounceIn',
    _4: 'lightSpeedIn',
    _5: 'zoomInUp',
    _6: 'flipInX',
    _7: 'bounceInUp',
    _8: 'zoomInLeft',
    _9: 'zoomInRight',
    _10: 'bounceInLeft',
    _11: 'flipInY',
    _12: 'bounceIn',
    _13: 'bounceInDown',
    _14: 'zoomInUp',
    _15: 'flipInX',
    _16: 'zoomInDown'
  },
});

module.exports = Gallery;