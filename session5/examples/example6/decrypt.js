var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var password = 'd6F3Efeq';

var fs = require('fs');
var zlib = require('zlib');

// encrypted file
var encrypted = fs.createReadStream('encrypted.txt');
// decrypt content
var decrypt = crypto.createDecipher(algorithm, password);
// unzip content
var unzip = zlib.createGunzip();
// write file
var decrypted = fs.createWriteStream('decrypted.txt');

encrypted
	.pipe(decrypt)
	.pipe(unzip)
	.pipe(decrypted).on('finish', function () {
	console.log('Decryption has been finished.');
});
