var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:testpwd1@ds037087.mongolab.com:37087/example');

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var Category = require('./models/Category');

mongoose.connection.once('open', function () {
    var category = new Category({
        name: 'category1',
        description: 'category description'
    });

    var id;

    Category.count()
        .then(function(count) {
            console.log(count);

            return category.save();
        })
        .then(function(result) {
            id = result._id;

            return Category.count();
        })
        .then(function(count) {
            console.log(count);

            return Category.findById(id);
        })
        .then(function(result) {
            result.name = 'Updated Name';

            return result.save();
        })
        .then(function(result) {
            return result.remove();
        })
        .then(function(result) {
            return Category.count();
        })
        .then(function(count) {
            console.log(count);
        })
        .then(null, function(err) {
            console.log(err);
        });
});