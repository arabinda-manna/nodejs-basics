'use strict';
module.exports = (sequelize, DataTypes) => {
  const TestModel = sequelize.define('TestModel', {
    modelName: DataTypes.STRING,
    numOfAttr: DataTypes.INTEGER,
    modelType: DataTypes.STRING
  }, {});
  TestModel.associate = function(models) {
    // associations can be defined here
  };
  return TestModel;
};