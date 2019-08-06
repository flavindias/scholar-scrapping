module.exports = (sequelize, DataTypes) => {
  const Paper = sequelize.define("Paper", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: DataTypes.STRING,
    scholarId: DataTypes.STRING,
    read: DataTypes.BOOLEAN,
    active: DataTypes.BOOLEAN
  });
  // Paper.associate = models => {
  //   Paper.belongsTo(models.Media, { as: 'media', foreignKey: 'media_id' });
  // };
  // Paper.associate = models => {
  //   Paper.hasMany(models.Point, { as: 'points', foreignKey: 'Paper_id' });
  // };


  return Paper;
}
