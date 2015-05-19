var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	// Fork workers.
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	//Track workers
	cluster.on('exit', function (worker) {
		console.log('worker ' + worker.process.pid + ' died');
	});
} else {
	// Workers can share any TCP connection
	// In this case its a HTTP server
	var server = http.createServer(function (req, res) {
		var message = "Processed by pid: " + process.pid;
		console.log(message);
		res.end(message);
	});

	server.listen(8000, function () {
		console.log('Started server in cluster pid: %d', process.pid);
	});
}