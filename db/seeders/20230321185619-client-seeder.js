module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clients', [{
      name: 'Дмитрий',
      surname: 'Астафьев',
      email: 'dim.astafev@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Вася',
      surname: 'Пупкин',
      email: 'vasya@mail.ru',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
