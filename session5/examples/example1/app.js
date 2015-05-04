var express = require('express');
var app = express();

app.post("/:alias/:id",
	function (req, res, next) {
		req.startTime = new Date();
		next();
	},
	function (req, res, next) {
		var params = {
			query: req.query,
			body: req.body, //No value here
			route: req.params,
			cookie: req.cookies, //No value here
			auhtHeader: req.get("Authorization")
		};

		console.log("Processed request %j", params);

		res.json(params);
		next();
	},
	function (req, res, next) {
		req.endTime = new Date();
		var processingTime = req.endTime - req.startTime;
		console.log("Processing time %d", processingTime);
	},
	function (req, res, next) {
		console.log("This function will never be called.");
	}
);

app.listen(3000);