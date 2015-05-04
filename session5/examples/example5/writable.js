var fs = require('fs');
var writableStream = process.stdout;

writableStream.write('Writing to console.\n');

var readableStream = fs.createReadStream('forPiping.txt');
readableStream.pipe(writableStream);