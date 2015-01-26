/** @jsx React.DOM */
'use strict';
var React = require('react');
var Carousel = require('react');

var App = React.createClass({
  componentDidMount: function() {
    // var audio = this.refs.audio.getDOMNode();
    
    // audio.volume = 0.1;
  },
  render: function() {
    return (
      <Carousel />
      <audio loop autoplay refs="audio">
        <source src="endlessly.mp3" type="audio/mp3">
      </audio>
    );
  }
});e

React.render( <App />, document.body );
