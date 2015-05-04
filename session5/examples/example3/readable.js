var fs = require('fs');

//Readable stream is in paused mode.
var readableStream = fs.createReadStream('lorem.txt');

//By this we'll get string, not binary buffer.
readableStream.setEncoding('utf8');

setTimeout(function () {
	//Switch to flowing mode by data listener.
	readableStream.on('data', function (st) {
		console.log(st);
	});
}, 3000);

readableStream.on('end', function () {
	console.log('Readable stream ended');
});