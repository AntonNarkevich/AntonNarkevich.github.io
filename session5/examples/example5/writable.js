var fs = require('fs');
var writeToFile = fs.createWriteStream('result.txt');
var writableStream = process.stdout;

writableStream.write('Writing to console.\n');

var readableStream = fs.createReadStream('forPiping.txt');

process.stdout.read('WRITE');

readableStream.pipe(writableStream);
readableStream.pipe(writeToFile);