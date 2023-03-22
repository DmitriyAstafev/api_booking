const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    static associate(models) {
      this.hasMany(models.Room, { foreignKey: 'hotelId' });
    }
  }
  Hotel.init({
    title: DataTypes.STRING,
    desc: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};
