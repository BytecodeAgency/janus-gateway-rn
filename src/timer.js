import BackgroundTimer from 'react-native-background-timer';

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
  this._timeoutId = BackgroundTimer.setInterval(this._callback, this._ms);
};

Timer.prototype.stop = function() {
  if (this._timeoutId) {
    BackgroundTimer.clearInterval(this._timeoutId);
    this._timeoutId = null;
  }
};

Timer.prototype.reset = function() {
  this.stop();
  this.start();
};

module.exports = Timer;
