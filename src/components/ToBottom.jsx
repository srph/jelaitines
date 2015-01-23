/** @jsx React.DOM */
'use strict';
var React = require('react');
var objectAssign = require('object-assign');

// Button styling
var ContainerStyle = {
  'height': '50px',
  'width': '50px',
  'borderRadius': '50%',
  'background': 'transparent',
  'borderLeft': '1px',
  'borderStyle': 'solid',
  'cursor': 'pointer'
};

// Animation while the button is inactive
var AnimatingStyle = {
  'borderLeftColor': '#fff',
  'animation': 'circular-motion 1.5s',
  'animationDelay': '1.5s'
  'WebkitAnimation': 'circular-motion 1.5s',
  'WebkitAnimationDelay': '1.5s'
};

// Animation when the button is finally active.
// Fades out the animation.
var ActiveStyle = {
  'transition': '1s',
  'borderColor': '#fff'
};

var ToBottom = React.createClass({
  getInitialState: function() {
    return { active: false };
  },

  render: function() {
    var active = this.props.active; // Shorthand
    var ActiveStyle = active ? ActiveStyle : AnimatingStyle;
    var ComponentStyle = objectAssign(ContainerStyle, ActiveStyle);

    return (
      <div style={ContainerStyle} onClick={this._clickHandler}>
        <i className="ion-arrow-down-b" />
      </div>
    );
  },

  _clickHandler: function(evt) {
    evt.preventDefault();

    this.setState({ active: true });

    var $doc = $(document);
    $doc.transition({ scrollTop: $doc.height() }, 100, 'easeInOutBack');
  }
});

module.exports = ToBottom;
