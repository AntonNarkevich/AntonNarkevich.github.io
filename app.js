app.get("/", function (req, res, next) {
	db.getProfile(name, function (err, profile) {
		if (err) {
			return next(err);
		}

		res.render("profile-page", profile);
	});
});


var Db = function() {
	var cache = {};
	var mongoCollection = mongo.users;//get it somehow;

	this.getProfile = function (name, callback) {
		if (cache[name]) {
			setTimeout(function () {
				callback(null, cache[name]);
			});
			return;
		}

		mongoCollection.find({name: name}, function (err, profile) {
			if (err) {
				return callback(err);
			}

			cache[name] = profile;

			return callback(null, profile);
		});
	}
};

var util = require('util');

var greet = function (username) {
	var message = util.format("Hello, %s", username);
};

module.exports = {
	greet: greet
};