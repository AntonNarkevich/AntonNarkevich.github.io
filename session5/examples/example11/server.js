var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('views'));

io.on('connection', function (socket) {
	socket.on('message', function (message) {
		io.emit('message', message);
	});
});

server.listen(8001);




