const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      this.hasMany(models.Booking, { foreignKey: 'clientId' });
    }
  }
  Client.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
