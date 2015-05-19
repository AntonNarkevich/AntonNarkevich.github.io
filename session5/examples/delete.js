var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Radio = function (station) {
	var self = this;
	//IMPORTANT. Not on the same tick.
	setTimeout(function () {
		self.emit('open', {station: station});
	}, 0);
};
// extend the EventEmitter
util.inherits(Radio, EventEmitter);

module.exports = Radio;