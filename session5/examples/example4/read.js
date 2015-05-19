var fs = require('fs');

//Readable stream is in paused mode.
var readableStream = fs.createReadStream('lorem.txt');

readableStream.on('readable', function () {
	var chunk;

	while (null !== (chunk = readableStream.read(30))) {
		console.log('Was read: %d bytes', chunk.length);
	}
});