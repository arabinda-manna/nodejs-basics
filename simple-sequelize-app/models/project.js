'use strict';
module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        name: DataTypes.STRING
    }, {});
    Project.associate = function (models) {
        // associations can be defined here
        Project.hasMany(models.Engineer, { foreignKey: 'project_id' });
        // Project.hasOne(models.Manager)
    };
    return Project;
};