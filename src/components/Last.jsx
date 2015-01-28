/** @jsx React.DOM */
'use strict';
var React = require('react');

var DefaultStyle = { 'opacity': '1' };
var ActiveStyle = { 'opacity': '0' };

var Last = React.createClass({
  /**
   * props.active - Flag whether this frame
   * is currently active (carousel).
   */
  propTypes: { active: React.PropTypes.bool.isRequired },

  render: function (argument) {
    var style = this.props.active ? DefaultStyle : ActiveStyle;

    return (
      <div style={style} className="clearfix">
        <div style={{ 'float': 'left', 'textAlign': 'left' }}>
          <h1> Happy </h1>
          <h4> Valentines </h4>
        </div>

        <div style={{ 'float': 'right', 'marginLeft': '5px', 'textAlign': 'center' }}>
          <h1> {'&exc;'} </h1>
        </div>
      </div>
    );
  }
});

module.exports = Last;
