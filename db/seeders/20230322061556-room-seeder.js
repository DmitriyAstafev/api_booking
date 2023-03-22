module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rooms', [{
      hotelId: 1,
      number: 1,
      desc: 'Стандарт',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hotelId: 1,
      number: 2,
      desc: 'Семейный',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hotelId: 1,
      number: 3,
      desc: 'Люкс',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hotelId: 2,
      number: 1,
      desc: 'Стандарт',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hotelId: 2,
      number: 2,
      desc: 'Эконом',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      hotelId: 2,
      number: 3,
      desc: 'Полулюкс',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  },
};
