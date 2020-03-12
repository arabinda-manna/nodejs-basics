'use strict';
module.exports = (sequelize, DataTypes) => {
    const Engineer = sequelize.define('Engineer', {
        name: DataTypes.STRING
    }, { tableName: 'Engineers' });
    Engineer.associate = function (models) {
    };
    return Engineer;
};