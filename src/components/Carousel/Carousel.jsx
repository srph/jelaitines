/** @jsx React.DOM */
'use strict';
var React = require('react');
var objectAssign = require('object-assign');

var px = require('../../utils/px');
var randIndex = require('../../utils/rand-index');
var adjustIndex = require('../../utils/adjust-index');

var First = require('./First');
var Sirkols = require('./Sirkols');
var Second = require('./Second');
var Gallery = require('./Gallery');
var Loader = require('./Loader');
var Greeting = require('./Greeting');

// The number of slides,
// check the stuff above.
var SLIDES_COUNT = 6;
// Put each slide in an array
// to be mappable (Array.map)
var SLIDES = [First, Sirkols, Second, Gallery, Loader, Greeting];
// BGs
// var SLIDES_BG = [
//   '(90deg, #4CB8C4 10%, #3CD3AD 90%)',
//   '(90deg, #DD5E89 10%, #F7BB97 90%)',
//   '(90deg, #8e9eab 10%, #eef2f3 90%)',
//   '(90deg, #83a4d4 10%, #b6fbff 90%)',
//   '(90deg, rgb(199, 79, 188) 70%, rgb(239, 92, 109) 90%)'
// ];
var SLIDES_BG = [
  '3CKz5og.png',
  '9Rfj5VY.png',
  'MlYJNTB.png',
  'Ok4X86P.png',
  'Qm4ZfBf.png',
  '3CKz5og.png'
];

// keyCode enum
var LEFT_KEY = 37;
var RIGHT_KEY = 39;

// Carousel container styling
var ContainerStyle = {
  'overflow': 'hidden',
  'height': '100vh',
  'width': '100%'
};

var Carousel = React.createClass({
  getInitialState: function() {
    return {
      active: 0,
    };
  },

  /**
   * Force update since `ref` does not exist
   * on initial load
   */
  componentDidMount: function() {
    // Bind arrow move
    document.addEventListener('keydown', this._handleKeyDown);

    // Update so refs will exist
    this.forceUpdate();
  },

  render: function() {
    // Shorthand
    var active = this.state.active;

    // Carousel data
    var CarouselWidth = (this.refs && this.refs.container)
      ? this.refs.container.getDOMNode().offsetWidth
      : 0 // Width

    // Current offset
    var CarouselOffset = (active * CarouselWidth) * -1;

    // Carousel styling
    var CarouselStyle = {
      'display': 'table',
      'height': '100%',
      'width': (SLIDES_COUNT * CarouselWidth) + 'px',

      // Remove default UL styling
      'listStyle': 'none',
      'padding': '0',
      'margin': '0',

      // Bg
      // 'background': '-webkit-linear-gradient' + SLIDES_BG[active],
      // 'background': '-moz-linear-gradient' + SLIDES_BG[active],
      // 'background': '-o-linear-gradient' + SLIDES_BG[active],
      // 'background': '-ms-linear-gradient' + SLIDES_BG[active],
      'backgroundImage': 'url(dist/img/bg/' + SLIDES_BG[active] + ')',
      // 'backgroundSize': 'cover',
      'backgroundRepeat': 'no-repeat',
      // 'backgroundAttachment': 'fixed',
      'backgroundPositionX': Math.abs(CarouselOffset) + 'px',

      // Move slide
      'WebkitTransform': 'translate('+CarouselOffset+'px, 0)',
      'MozTransform': 'translate('+CarouselOffset+'px, 0)',
      'OTransform': 'translate('+CarouselOffset+'px, 0)',
      'msTransform': 'translate('+CarouselOffset+'px, 0)',
      'transform': 'translate('+CarouselOffset+'px, 0)',

      // Slide transitions
      'WebkitTransition': '1.5s all cubic-bezier(0.68, -0.55, 0.265, 1.15)',
      'MozTransition': '1.5s all cubic-bezier(0.68, -0.55, 0.265, 1.15)',
      'OTransition': '1.5s all cubic-bezier(0.68, -0.55, 0.265, 1.15)',
      'msTransition': '1.5s all cubic-bezier(0.68, -0.55, 0.265, 1.15)',
      'transition': '1.5s all cubic-bezier(0.68, -0.55, 0.265, 1.15)'
    };

    // Each slide
    var SlideStyle = {
      'display': 'table-cell',
      'verticalAlign': 'middle',
      'listStyle': 'none',
      'width': px(CarouselWidth)
    };

    var move = function(dir) {
      return function() { this._move(dir) }.bind(this)
    }.bind(this);

    return (
      <div ref={'container'} style={ContainerStyle}>
        <ul style={CarouselStyle}>
          {SLIDES.map(function(Slide, i) {
            return (
              <li key={i} style={SlideStyle}>
                { active >= i ? <Slide /> : <div />}
              </li>
            );
          }.bind(this))} 
        </ul>
      </div>
    );
  },

  /**
   * Move to another slide (either next, random, or previous)
   * @param {string} dir Slide direction
   */
  _move: function(dir) {
    var active = this.state.active;
    var length = SLIDES_COUNT;

    this.setState({ active: dir == 'random'
      ? randIndex(length)
      : adjustIndex( active + (dir == "next" ? 1 : -1), length )
    });
  },

  /**
   * Move slides when an arrow key is pressed
   */
  _handleKeyDown: function(evt) {
    var key = evt.keyCode;

    if ( key == LEFT_KEY ) this._move('previous');
    else if ( key == RIGHT_KEY ) this._move('next');
  }
});

module.exports = Carousel;