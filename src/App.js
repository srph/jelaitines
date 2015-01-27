/** @jsx React.DOM */
'use strict';
var React = require('react');
var Carousel = require('./components/Carousel/Carousel');

var App = React.createClass({
  componentDidMount: function() {
    // var audio = this.refs.audio.getDOMNode();
    
    // audio.volume = 0.1;
  },
  render: function() {
    return (
      <div>
        <Carousel />
        <audio loop autoplay ref="audio">
          <source src="endlessly.mp3" type="audio/mp3" />
        </audio>
      </div>
    );
  }
});

React.render( <App />, document.body );