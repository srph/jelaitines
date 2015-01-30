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
        <audio loop autoPlay ref="audio">
          <source src="endlessly.mp3" type="audio/mp3" />
        </audio>
      </div>
    );
  },

  _incrementVolume: function() {
    var phase = this.state.phase;
    var audio = this.refs.audio.getDOMNode();

    this.$interval = setInterval(function() {
      switch(phase) {
        case 0:
          audio.volume += 0.1;

          if ( audio.volume == 6 ) {
            this.setState({ phase: 1 });
          }

          break;

        case 1:
          audio.volume -= 0.1;

          if ( audio.volume == 4 ) {
            this.setState({ phase: 2 });
          }

          break;

        case 2:
          audio.volume += 0.1;
          break;

          cancelInterval(this.$interval);
      }
    }, 8000);
  }
});

module.exports = BGM;