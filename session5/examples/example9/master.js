var cp = require('child_process');
var slave = cp.fork('./slave');

var HardWork = function (number) {
	this.number = number;
};

console.log('Master wants to square the number.');
slave.send(new HardWork(1500));

slave.on('message', function(workResult) {
	console.log('Work is done: %d -> %d', workResult.number, workResult.processed);
	slave.kill();
});