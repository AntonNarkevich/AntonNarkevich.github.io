var fs = require("fs");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var swig = require("swig");

var express = require('express');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
	keys: ['key1', 'key2']
}));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.engine('swig', swig.renderFile);
app.set('view engine', 'swig');

app.get("/info", function (req, res, next) {
	fs.readFile("info.txt", function (err, text) {
		if (err) {
			return next(err);
		}

		res.send(text);
	});
});

app.get("/giveMeSession", function (req, res, next) {
	req.session.someValue = 3;
	res.cookie("cookieValue", 42);

	res.render("cookie");
});

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

app.get("/error", function (req, res, next) {
	next(new Error("I want to raise error here"));
});

app.use(function (err, res, res, next) {
	res.status(500).render("error", {err: err});
});

app.listen(3000);