/** @jsx React.DOM */
'use strict';
var React = require('react');

var Last = React.createClass({
  /**
   * props.active - Flag whether this frame
   * is currently active (carousel).
   */
  propTypes: { active: React.PropTypes.bool.isRequired },

  render: function (argument) {
    var ContainerStyle = {
      'position': 'relative',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'width': 500,
      'opacity': this.props.active ? 1 : 0
    };

    return (
      <div style={ContainerStyle} className="clearfix">
        <div style={{ 'float': 'left', 'textAlign': 'left' }}>
          <h1> Happy </h1>
          <h4> Valentines </h4>
        </div>

        <div style={{ 'float': 'right', 'marginLeft': '5px', 'textAlign': 'center' }}>
          <h1> &#33; </h1>
        </div>
      </div>
    );
  }
});

module.exports = Last;
