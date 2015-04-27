var db = require('./index.js');

var category = { name: 'Category 1', description: 'Description blabla' };
var id;

db.sequelize.sync({force: true})
    .then(function() {
        return db.Category.count();
    })
    .then(function(count) {
        console.log(count);

        return db.Category.create(category);
    })
    .then(function(result) {
        id = result.id;

        return db.Category.count();
    })
    .then(function(count) {
        console.log(count);

        return db.Product.find({where: {id: id}}, {include: db.Category});
    })
    .then(function(result) {
        result.name = 'Updated Name';

        return result.save();
    })
    .then(function(result) {
        return result.destroy();
    })
    .then(function(result) {
        return db.Category.count();
    })
    .then(function(count) {
        console.log(count);
    })
    .then(null, function(err) {
        console.log(err);
    });