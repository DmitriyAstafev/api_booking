module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hotels', [{
      title: 'Astoria',
      desc: 'Лучший отель в городе',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      title: 'Grand',
      desc: 'Супер-пупер люкс',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hotels', null, {});
  },
};
