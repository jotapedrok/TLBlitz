'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Status', [{
      id: '1',
      title: 'Pendente',
      priority: 1,
    },
    {
      id: '2',
      title: 'Em Andamento',
      priority: 2,
    },
    {
      id: '3',
      title: 'Pronto',
      priority: 3,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Status', null, {});
  }
};
