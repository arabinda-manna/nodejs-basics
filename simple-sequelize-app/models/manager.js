'use strict';
module.exports = (sequelize, DataTypes) => {
    const Manager = sequelize.define('Manager', {
        name: DataTypes.STRING
    }, {});
    Manager.associate = function (models) {
        // associations can be defined here
        Manager.hasOne(models.Project, { foreignKey: 'manager_id' });
    };
    return Manager;
};