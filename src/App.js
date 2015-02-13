/** @jsx React.DOM */
'use strict';
var React = require('react');

var BGM = require('./components/BGM');
var Carousel = require('./components/Carousel/Carousel');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Carousel />
        <BGM />
      </div>
    );
  }
});

React.render( <App />, document.body );