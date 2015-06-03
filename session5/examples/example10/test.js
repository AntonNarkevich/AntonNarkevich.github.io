var request = require('request');
var _ = require('lodash');

_.times(100, function () {
	request('http://localhost:8001');
});