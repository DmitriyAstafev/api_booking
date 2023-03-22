/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientId: {
        references: {
          model: 'Clients',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      roomId: {
        references: {
          model: 'Rooms',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      checkIn: {
        type: Sequelize.DATEONLY,
      },
      checkOut: {
        type: Sequelize.DATEONLY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  },
};
