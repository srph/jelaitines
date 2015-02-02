/** @jsx React.DOM */
var React = require('react');

var Thumbnail = require('../Thumbnail');

var BASE_SIZE = 300;
var CELL_COUNT = 4;

/**
 * {animate.css}
 */
var one = require('../../utils/$el').one;
var animate = require('./utils/animate');
var HiddenStyle = require('./utils/hidden.css');
var ANIMATIONEND_EVT = require('./utils/animationEnd.evt');
var ANI = {
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
};

var Gallery = React.createClass({
  /**
   * {animate.css}
   */
  componentDidMount: function() {
    this.forceUpdate(function() {
      var refs = this.refs;

      setTimeout(this._1, 1500);
      one(refs._1.getDOMNode(), ANIMATIONEND_EVT, this._2);
      one(refs._2.getDOMNode(), ANIMATIONEND_EVT, this._3);
      one(refs._3.getDOMNode(), ANIMATIONEND_EVT, this._4);
      one(refs._4.getDOMNode(), ANIMATIONEND_EVT, this._5);
      one(refs._5.getDOMNode(), ANIMATIONEND_EVT, this._6);
      one(refs._6.getDOMNode(), ANIMATIONEND_EVT, this._7);
      one(refs._7.getDOMNode(), ANIMATIONEND_EVT, this._8);
      one(refs._8.getDOMNode(), ANIMATIONEND_EVT, this._9);
      one(refs._9.getDOMNode(), ANIMATIONEND_EVT, this._10);
      one(refs._10.getDOMNode(), ANIMATIONEND_EVT, this._11);
      one(refs._11.getDOMNode(), ANIMATIONEND_EVT, this._12);
      one(refs._12.getDOMNode(), ANIMATIONEND_EVT, this._13);
      one(refs._13.getDOMNode(), ANIMATIONEND_EVT, this._14);
      one(refs._14.getDOMNode(), ANIMATIONEND_EVT, this._15);
      one(refs._15.getDOMNode(), ANIMATIONEND_EVT, this._16);
    });
  },

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
   * {animate.css}
   */
  _1: function() { animate(this.refs._1.getDOMNode(), ANI._1 ); },
  _2: function() { animate(this.refs._2.getDOMNode(), ANI._2 ); },
  _3: function() { animate(this.refs._3.getDOMNode(), ANI._3 ); },
  _4: function() { animate(this.refs._4.getDOMNode(), ANI._4 ); },
  _5: function() { animate(this.refs._5.getDOMNode(), ANI._5 ); },
  _6: function() { animate(this.refs._6.getDOMNode(), ANI._6 ); },
  _7: function() { animate(this.refs._7.getDOMNode(), ANI._7 ); },
  _8: function() { animate(this.refs._8.getDOMNode(), ANI._8 ); },
  _9: function() { animate(this.refs._9.getDOMNode(), ANI._9 ); },
  _10: function() { animate(this.refs._10.getDOMNode(), ANI._10 ); },
  _11: function() { animate(this.refs._11.getDOMNode(), ANI._11 ); },
  _12: function() { animate(this.refs._12.getDOMNode(), ANI._12 ); },
  _13: function() { animate(this.refs._13.getDOMNode(), ANI._13 ); },
  _14: function() { animate(this.refs._14.getDOMNode(), ANI._14 ); },
  _15: function() { animate(this.refs._15.getDOMNode(), ANI._15 ); },
  _16: function() { animate(this.refs._16.getDOMNode(), ANI._16 ); }
});

module.exports = Gallery;