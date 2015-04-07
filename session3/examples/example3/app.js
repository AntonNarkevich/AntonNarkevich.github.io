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

app.use('/', require("./routes/testRoutes"));

app.use(function (err, res, res, next) {
	res.status(500).render("error", {err: err});
});

app.listen(3000);