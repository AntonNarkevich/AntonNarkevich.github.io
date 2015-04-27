module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Product', {
        name: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.ENUM('type1', 'type2')
        }
    }, {
        freezeTableName: true
    });
};