/** @jsx React.DOM */
'use strict';
var React = require('react');

// Carousel container styling
var ContainerStyle = { 'overflow': 'hidden' };

var Carousel = React.createClass({
  getInitialState: function() {
    return { active: 0 };
  },

  render: function() {
    // Shorthand
    var active = this.props.active;
    var children = this.props.children;

    // Carousel data
    var Carousel = this.refs.carousel.getDOMNode(); // Our element
    var CarouselW = Carousel.width(); // Width
    var CarouselOffset = (this.props.active * CarouselW) * -1;


    var CarouselStyle = {
      'display': 'table',
      'width': '100%',
      'height': '100%'
      'width': (slides.length * CarouselW),
      'transform': 'translate(\''+CarouselOffset+'\'px, 0)',
      'webkit-transform': 'translate(\''+CarouselOffset+'\'px, 0)',
    };

    var SlideStyle = {
      'display': 'table-cell',
      'verticalAlign': 'middle',
      'display': 'inline-block',
      'listStyle': 'none'
    };

    return (
      <div ref={'carousel'} style={ContainerStyle}>
        <ul style={CarouselStyle}>
          {React.Children.map(children, function(slide, i) {
            <li key={i} style={SlideStyle}>
              <slide isActive={active===i} />
            </li>
          }, this)}
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
      : adjustIndex(active + dir == "next" ? 1 : -1)
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
