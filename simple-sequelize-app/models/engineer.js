'use strict';
module.exports = (sequelize, DataTypes) => {
    const Engineer = sequelize.define('Engineer', {
        name: DataTypes.STRING
    }, {});
    Engineer.associate = function (models) {
    };
    return Engineer;
};