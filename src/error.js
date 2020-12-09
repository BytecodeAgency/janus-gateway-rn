var Helpers = require('./helpers');

/**
 * @param {JanusMessage} janusMessage
 * @constructor
 */
function JanusError(janusMessage) {
  this.name = this.constructor.name;
  this.janusMessage = janusMessage;
  var janusError = janusMessage.getError();
  this.message = janusError['reason'];
  this.code = janusError['code'];
  console.warn("Janus error ", this.code, " ", this.message);
}

Helpers.inherits(JanusError, Error);

module.exports = JanusError;
