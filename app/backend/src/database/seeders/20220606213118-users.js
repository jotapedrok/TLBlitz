'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: 'anything123',
      username: 'The Admin',
      password: 'secret_admin',
      email: 'admin@admin.com',
      role: 'admin',
      deleted: false,
      created_at: Date.now(),
      updated_at: Date.now()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
