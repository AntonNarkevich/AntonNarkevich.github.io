var exec = require('child_process').exec;

child = exec('ifconfig', function (err, stdout, stderr) {
	if (err) { throw err; }

	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);
});