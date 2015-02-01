/** @jsx React.DOM */
'use strict';
var React = require('react');

var Last = React.createClass({
  render: function (argument) {
    var ContainerStyle = {
      'position': 'relative',
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'width': 350
    };

    return (
      <div style={ContainerStyle} className="clearfix">
        <div style={{ 'float': 'left', 'textAlign': 'left' }}>
          <h1 className="highlight-type u-text-center"> Happy </h1>
          <h3 className="highlight-type"> Valentines </h3>
        </div>

        <div style={{ 'float': 'right', 'marginLeft': '5px', 'textAlign': 'center' }}>
          <h1> &#33; </h1>
        </div>
      </div>
    );
  }
});

module.exports = Last;
