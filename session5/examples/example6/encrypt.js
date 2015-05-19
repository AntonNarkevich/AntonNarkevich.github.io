var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var password = 'd6F3Efeq';

var fs = require('fs');
var zlib = require('zlib');

// input file
var message = fs.createReadStream('message.txt');
// zip content
var zip = zlib.createGzip();
// encrypt content
var encrypt = crypto.createCipher(algorithm, password);
// write file
var encrypted = fs.createWriteStream('encrypted.txt');


message.pipe(zip).pipe(encrypt).pipe(encrypted).on('finish', function () {
	console.log('Encryption has been finished.');
});