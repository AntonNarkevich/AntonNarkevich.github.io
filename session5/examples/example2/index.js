var Loader = require('./loader.js');

var loader = new Loader();

for (var i = 0; i <= 11; i += 1) {
	loader.once('loadingProgress', function () {
		console.log('Loading progress handler executed');
	});
}