var exec = require('child_process').exec;

//Not needed on linux
var windowsPrefix = process.env.comspec + ' /c ';
console.log(windowsPrefix);

//TODO: Change to ipconfig -a on Mac
child = exec(windowsPrefix + 'ipconfig', function (err, stdout, stderr) {
	if (err) { throw err; }

	console.log('stdout: ' + stdout);
	console.log('stderr: ' + stderr);
});