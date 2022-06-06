'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Blocks', [{
      id: '1',
      name: 'Block 1',
      created_by: '1',
      deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '2',
      name: 'Block 2',
      created_by: '1',
      deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '3',
      name: 'Block 3',
      created_by: '1',
      deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '4',
      name: 'Block 4',
      created_by: '1',
      deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Blocks', null, {});
  }
};
