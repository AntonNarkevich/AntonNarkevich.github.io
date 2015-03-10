var webshot = require('webshot');
var parseArgs = require('minimist');
var util = require('util');

var args = parseArgs(process.argv.slice(2));

var resolutions = [320, 768, 1024];

resolutions.forEach(function (resolution) {
	var options = {
		screenSize: { width: resolution }
	};

	var fileName = util.format('%s.%d.png', args.url, resolution);

	webshot(args.url, fileName, options, function(err) {
		if (err) { throw err; }

		console.log('%dpx captured.', resolution);
	});
});
