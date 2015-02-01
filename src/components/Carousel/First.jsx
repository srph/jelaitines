/** @jsx React.DOM */
var React = require('react');

var HideStyle = require('./_hide');
var animate = require('./_animate');
var one = require('../../utils/one');

var TRANSITION_END_EVT = require('../../utils/transition-end');
var ANI = { _1: 'bounceInDown', _2: 'zoomInUp', _3: 'bounceIn' };

var First = React.createClass({
  /**
   * {animate.css}
   */
  componentDidMount: function() {
    this.forceUpdate(function() {
      var refs = this.refs;

      this._1();
      one(refs._1.getDOMNode(), TRANSITION_END_EVT, this._2);
      one(refs._2.getDOMNode(), TRANSITION_END_EVT, this._3);
    });
  },

  render: function () {
    return (
      <div className="u-uppercase u-text-center">
        <div ref={'_1'} style={HideStyle}> <h4><span className="special-type">Your</span></h4> </div>
        <div ref={'_2'} style={HideStyle}> <h1 className="highlight-type u-nocase">Hello!</h1> </div>
        <div ref={'_3'} style={HideStyle}> <h5><span className="l-type">Captured My Eyes</span></h5> </div>
      </div>
    );
  },

  /**
   * {animate.css}
   */
  _1: function() { animate(this.refs._1.getDOMNode(), ANI._1 ); },
  _2: function() { animate(this.refs._2.getDOMNode(), ANI._2 ); },
  _3: function() { animate(this.refs._3.getDOMNode(), ANI._3 ); }
});

module.exports = First;