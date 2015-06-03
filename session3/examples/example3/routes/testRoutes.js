var fs = require("fs");
var express = require('express');
var router = express.Router();

router.get("/info", function (req, res, next) {
	fs.readFile("info.txt", function (err, text) {
		if (err) {
			return next(err);
		}

		res.send(text);
	});
});

router.get("/giveMeSession", function (req, res, next) {
	req.session.someValue = 3;
	res.cookie("cookieValue", 42);

	res.render("cookie");
});

router.post("/:alias/:id",
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

router.get("/error", function (req, res, next) {
	throw new Error("I want to raise error here");
});

module.exports = router;
