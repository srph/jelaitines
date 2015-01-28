/** @jsx React.DOM */
'use strict';
var React = require('react');

var px = require('../../utils/px');
var randIndex = require('../../utils/rand-index');
var adjustIndex = require('../../utils/adjust-index');

var First = require('../First');
var Ikalawa = require('../Ikalawa');
var Sirkols = require('../Sirkols');
var Loading = require('../Loading');
var Last = require('../Last');

// The number of slides,
// check the stuff above.
var SLIDES_COUNT = 5;
// Put each slide in an array
// to be mappable (Array.map)
var SLIDES = [First, Ikalawa, Sirkols, Loading, Last];

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
  componentDidMount: function() { this.forceUpdate(); },

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

      // Move slide
      'WebkitTransform': 'translate('+CarouselOffset+'px, 0)',
      'MozTransform': 'translate('+CarouselOffset+'px, 0)',
      'OTransform': 'translate('+CarouselOffset+'px, 0)',
      'msTransform': 'translate('+CarouselOffset+'px, 0)',
      'transform': 'translate('+CarouselOffset+'px, 0)',

      // Slide transitions
      'WebkitTransition': '0.5s all',
      'MozTransition': '0.5s all',
      'OTransition': '0.5s all',
      'msTransition': '0.5s all',
      'transition': '0.5s all'
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
        <div onClick={move('next')}>MOVE</div>
        <ul style={CarouselStyle}>
          {SLIDES.map(function(Slide, i) {
            return (
              <li key={i} style={SlideStyle}>
                <Slide active={active == i} />
              </li>
            );
          })}
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
});

module.exports = Carousel;