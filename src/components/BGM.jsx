/** @jsx React.DOM */
var React = require('react');

var BGM = React.createClass({
  getInitialState: function() {
    return { phase: 0 };
  },
  /**
   * Weaken the BGM volume
   */
  componentDidMount: function() {
    this.forceUpdate(function() {
      this.refs.audio.getDOMNode().volume = 0.1;
      this._incrementVolume();
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        <audio autoPlay ref="audio">
          <source src="endlessly.mp3" type="audio/mp3" />
        </audio>
      </div>
    );
  },

  _incrementVolume: function() {
    var phase = this.state.phase;
    var audio = this.refs.audio.getDOMNode();
    var interval = intrvl(phase);

    this.$interval = setInterval(function() {
      switch(phase) {
        case 0:
          audio.volume += 0.1;

          if ( audio.volume == 0.6 ) {
            this.setState({ phase: 1 });
          }

          break;

        case 1:
          audio.volume -= 0.1;

          if ( audio.volume == 0.4 ) {
            this.setState({ phase: 2 });
          }

          break;

        case 2:
          audio.volume += 0.1;
          break;

          if ( audio.volume == 0.6 ) {
            cancelInterval(this.$interval);
          }
      }
    }, interval);
  }
});

/**
 * Provides proper variation of interval for each phase
 * of volume adjustment
 *
 * @params {int} p Nth phase
 */
function intrvl(p) { if(!p)return 4000;if(p==1)return 5500;return 6000; }

module.exports = BGM;