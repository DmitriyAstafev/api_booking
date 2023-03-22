const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      this.belongsTo(models.Hotel, { foreignKey: 'hotelId' });
      this.hasMany(models.Booking, { foreignKey: 'roomId' });
    }
  }
  Room.init({
    hotelId: DataTypes.INTEGER,
    number: DataTypes.INTEGER,
    desc: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
