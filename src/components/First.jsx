/** @jsx React.DOM */
var React = require('react');

var First = React.createClass({
  render: function () {
    return (
      <div className="u-uppercase u-text-center">
        <h4> <span className="special-type">Your</span> </h4>
        <h1 className="highlight-type u-nocase"> Hello! </h1>
        <h5> <span className="l-type">Captured My Eyes</span> </h5>
      </div>
    );
  }
});

module.exports = First;
