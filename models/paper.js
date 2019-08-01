'use strict';
module.exports = (sequelize, DataTypes) => {
  const Paper = sequelize.define('Paper', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    scholarId: DataTypes.STRING,
    read: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  }, {});
  Paper.associate = function(models) {
    // associations can be defined here
  };
  return Paper;
};