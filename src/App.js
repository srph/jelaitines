/** @jsx React.DOM */
'use strict';
var React = require('react');
var Carousel = require('react');

var App = React.createClass({
  render: function() {
    <Carousel>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Carousel>
  }
});

React.render( <App />, document.body );