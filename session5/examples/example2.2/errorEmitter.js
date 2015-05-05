var fs = require('fs');

var file = fs.createReadStream('noSuchFile');

file.on('error', function (err) {
	console.log('Err handled: '  + err.message);
	console.log('Further execution');
});