/** @jsx React.DOM */
var React = require('react');
var Oassign = require('object-assign');

var Circular = { 'borderRadius': '50%' };
var L1 = propSize('98px');
var L2 = propSize('72px');
var L3 = propSize('64px');

var Sirkols = React.createClass({
  render: function () {
    var IMGStyle = {
      '1': Oassign('borderRadius', L1),
      '2': Oassign('borderRadius', L2),
      '3': Oassign('borderRadius', L4)
    };

    return (
      <div>
        <img src="" style={IMGStyle['1']} />
        <img src="" style={IMGStyle['2']} />
        <img src="" style={IMGStyle['3']} />
      </div>
    );
  }
});

/**
 * Proportional w/h
 */
function propSize(s) { return { 'width': s, 'height': s }; }

module.exports = Sirkols;
