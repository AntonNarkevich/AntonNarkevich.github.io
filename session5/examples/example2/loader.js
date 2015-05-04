var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Loader = function () {
	EventEmitter.call(this);
	var self = this;

	//self.setMaxListeners(0); //Removing max listener count.

	var progressTimer = setInterval(function () {
		self.emit('loadingProgress');
	}, 1000);

	setTimeout(function () {
		clearInterval(progressTimer);
	}, 5000);

	// EventEmitters inherit a single event listener, see it in action
	this.on('newListener', function (listener) {
		console.log('Registered event listener for: ' + listener);
	});
};

// extend the EventEmitter class using our Radio class
util.inherits(Loader, EventEmitter);

module.exports = Loader;