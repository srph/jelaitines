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

    this.$timeout = setTimeout(function() {
      switch(phase) {
        case 0:
          audio.volume += 0.1;

          if ( audio.volume >= 0.8 ) {
            this.setState({ phase: 1 });
          }

          console.log( new Date().getSeconds() );
          this._adjustVolume();
          break;

        case 1:
          audio.volume -= 0.1;

          if ( audio.volume <= 0.3 ) {
            this.setState({ phase: 2 });
          }

          console.log( new Date().getSeconds() );
          this._adjustVolume();
          break;

        case 2:
          audio.volume += 0.1;

          console.log( new Date().getSeconds() );

          if ( audio.volume >= 0.6 ) {
            clearTimeout(this.$timeout);
            break;
          }

          this._adjustVolume();
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
function intrvl(p) { if(!p)return 15000;if(p==1)return 10000;return 20000; }

module.exports = BGM;