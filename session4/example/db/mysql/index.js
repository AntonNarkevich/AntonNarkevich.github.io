var fs = require("fs"),
    path = require("path"),
    Sequelize = require("sequelize");

var sequelize = new Sequelize('example', 'root', 'testpwd1', {
    host: 'localhost',
    dialect: 'mysql'
});

var db = {};

fs.readdirSync(path.join(__dirname, 'models'))
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, 'models', file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.Category.hasMany(db.Product);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;