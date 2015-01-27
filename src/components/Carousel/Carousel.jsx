/** @jsx React.DOM */
'use strict';
var React = require('react');

var First = require('../First');
var Ikalawa = require('../Ikalawa');
var Sirkols = require('../Sirkols');
var Loading = require('../Loading');
var Last = require('../Last');

// Carousel container styling
var ContainerStyle = {
  'overflow': 'hidden',
  'height': '100vh',
  'width': '100%'
};

// Each slide
var SlideStyle = {
  'display': 'table-cell',
  'verticalAlign': 'middle',
  'listStyle': 'none'
};

var Carousel = React.createClass({
  getInitialState: function() {
    return { active: 0 };
  },

  render: function() {
    // Shorthand
    var active = this.state.active;
    var children = this.props.children;
    var slides = this.props.slide;

    // Carousel data
    var CarouselNode = this.refs.carousel.getDOMNode(); // Our element
    var CarouselW = CarouselNode.width(); // Width
    var CarouselOffset = (this.props.active * CarouselW) * -1;

    // Carousel
    var CarouselStyle = {
      'display': 'table',
      'height': '100%',
      'width': (slides.length * CarouselW),
      'transform': 'translate(\''+CarouselOffset+'\'px, 0)',
      'webkit-transform': 'translate(\''+CarouselOffset+'\'px, 0)',
    };

    return (
      <div ref={'carousel'} style={ContainerStyle}>
        <ul style={CarouselStyle}>
          <li class={SlideStyle}>
          </li>
        </ul>
      </div>
    );
  },

  move: function(dir) {
    var active = this.state.active;
    var images = this.state.images;
    var length = images.length;

    this.setState({ active: dir == 'random'
      ? randIndex(length)
      : adjustIndex( active + (dir == "next" ? 1 : -1) )
    });
  }
});

/**
 * Adjusts the given index to not
 * exceed 0 and the last index.
 *
 * @param i Incremented / decremented index
 * @param m Number of elements
 * @returns int
 */
function adjustIndex(i, m) { return i <= m - 1 && i >= 0 ? i : i < 0 ? m : 0; }
function randIndex(l) { return Math.floor( Math.random() * (l - 1) + 0 ); }

module.exports = Carousel;
