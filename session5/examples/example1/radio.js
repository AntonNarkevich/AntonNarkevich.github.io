var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Radio = function (station) {
	EventEmitter.call(this);
	var self = this;

	setTimeout(function () {
		self.emit('open', station);
	}, 0);

	var progressTimer = setInterval(function () {
		//Several arguments
		self.emit('playing', station, 'What is love? ' +
			'Baby don\'t hurt me, don\'t hurt me. No more...');
	}, 1000);

	setTimeout(function () {
		clearInterval(progressTimer);
		self.emit('close', station);
	}, 5000);

	self.emit("ghostEvent", {message: 'No one will ever get this message.'});
};

// extend the EventEmitter class using our Radio class
util.inherits(Radio, EventEmitter);

module.exports = Radio;