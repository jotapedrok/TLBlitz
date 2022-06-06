'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: '1',
      username: 'The Admin',
      password: 'secret_admin',
      email: 'admin@admin.com',
      role: 'admin',
      deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '2',
      username: 'Zé 1',
      password: 'secret_ze',
      email: 'ze1@ze.com',
      role: 'user',
      deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '3',
      username: 'Zé 2',
      password: 'secret_ze',
      email: 'ze2@ze.com',
      role: 'user',
      deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '4',
      username: 'Zé 3',
      password: 'secret_ze',
      email: 'ze3@ze.com',
      role: 'user',
      deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '5',
      username: 'Zé 4',
      password: 'secret_ze',
      email: 'ze4@ze.com',
      role: 'user',
      deleted: false,
      created_at: new Date(),
      updated_at: new Date(),
    },], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
