import BackgroundTimer from 'react-native-background-timer';
import Platform from 'react-native'

/**
 * @param {Function} callback
 * @param {number} ms
 * @constructor
 */
function Timer(callback, ms) {
  this._callback = callback;
  this._ms = ms;
  this._timeoutId = null;
}

Timer.prototype.start = function() {
  console.log("setting interval");
  if (Platform.OS === "android") {
      BackgroundTimer.setInterval(() => {
          this.send({ janus: "keepalive" });
      }, 30000);
  } else {
      setInterval(() => {
          this.send({ janus: "keepalive" });
      }, 30000);
  }
};

Timer.prototype.stop = function() {
  // BackgroundTimer.stopBackgroundTimer();
};

Timer.prototype.reset = function() {
  this.stop();
  this.start();
};

module.exports = Timer;
