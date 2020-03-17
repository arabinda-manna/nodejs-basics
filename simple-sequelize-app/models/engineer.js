'use strict';
module.exports = (sequelize, DataTypes) => {
    const Engineer = sequelize.define('Engineer', {
        name: DataTypes.STRING,
        project_id: DataTypes.INTEGER
    }, { tableName: 'Engineers' });
    Engineer.associate = function (models) {
    };
    return Engineer;
};