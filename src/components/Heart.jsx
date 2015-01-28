/** @jsx React.DOM */
var React = require('react');

var ContainerStyle = { 'position': 'relative' };
var LeftStyle = {};
var RightStyle = {};

var Heart = React.createClass({
  render: function () {
    return (
      <div style={ContainerStyle}>
        <div style={LeftStyle} />
        <div style={RightStyle} />
      </div>
    );
  }
});

module.exports = Heart;