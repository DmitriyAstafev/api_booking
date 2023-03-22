const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      this.belongsTo(models.Client, { foreignKey: 'clientId' });
      this.belongsTo(models.Room, { foreignKey: 'roomId' });
    }
  }
  Booking.init({
    clientId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
    checkIn: DataTypes.DATEONLY,
    checkOut: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
