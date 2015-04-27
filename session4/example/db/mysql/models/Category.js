module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Category', {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true
    });
};