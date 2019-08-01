'use strict';
import { Paper } from '../models';

module.exports = (sequelize, DataTypes) => {
  const Reference = sequelize.define('Reference', {
    paperId: DataTypes.INTEGER,
    citedId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {});
  Reference.associate = function(models) {
    // associations can be defined here

  };
  return Reference;
};