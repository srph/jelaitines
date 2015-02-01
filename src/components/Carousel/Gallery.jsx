/** @jsx React.DOM */
var React = require('react');

var Thumbnail = require('./Thumbnail');

var Gallery = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <Thumbnail src="dist/img/k.jpg" size="1" />
          <Thumbnail src="dist/img/k.jpg" size="1" />
          <Thumbnail src="dist/img/k.jpg" size="1" />
          <Thumbnail src="dist/img/k.jpg" size="1" />
        </div>
      </div>
    );
  }
});

module.exports = Gallery;