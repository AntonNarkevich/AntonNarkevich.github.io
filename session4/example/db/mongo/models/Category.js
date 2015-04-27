var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: String,
    description: String,
    date: { type: Date, default: Date.now }
});

var Category = mongoose.model('Category', schema);

module.exports = Category;