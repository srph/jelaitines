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
      this._adjustVolume();
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

  /**
   * Adjust and variate volume over time
   */
  _adjustVolume: function() {
    var phase = this.state.phase;
    var audio = this.refs.audio.getDOMNode();
    var interval = intrvl(phase);

    this.$interval = setTimeout(function() {
      switch(phase) {
        case 0:
          audio.volume += 0.1;

          if ( audio.volume >= 0.6 ) {
            this.setState({ phase: 1 });
          }

          this._adjustVolume();
          break;

        case 1:
          audio.volume -= 0.1;

          if ( audio.volume <= 0.4 ) {
            this.setState({ phase: 2 });
          }

          this._adjustVolume();
          break;

        case 2:
          audio.volume += 0.1;

          this._adjustVolume();

          if ( audio.volume >= 0.6 ) {
            clearTimeout(this.$interval);
          }

          break;          
      }
    }.bind(this), interval);
  }
});

/**
 * Provides proper variation of interval for each phase
 * of volume adjustment
 *
 * @params {int} p Nth phase
 */
function intrvl(p) { if(!p)return 8000;if(p==1)return 3000;return 10000; }

module.exports = BGM;