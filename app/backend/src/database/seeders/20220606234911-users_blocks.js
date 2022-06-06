'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users_Blocks', [{
      user_id: '1',
      block_id: '1',
      access: 'admin',
      removed: false,
    },
    {
      user_id: '1',
      block_id: '2',
      access: 'admin',
      removed: false,
    },
    {
      user_id: '2',
      block_id: '2',
      access: 'user',
      removed: false,
    },
    {
      user_id: '3',
      block_id: '2',
      access: 'user',
      removed: false,
    },
    {
      user_id: '1',
      block_id: '3',
      access: 'admin',
      removed: false,
    },
    {
      user_id: '4',
      block_id: '4',
      access: 'viewer',
      removed: false,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users_Blocks', null, {});

  }
};
