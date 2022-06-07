'use strict';

const c = 'Cillum aliqua in anim nisi non ullamco pariatur minim ullamco id laborum irure. Pariatur ea dolor occaecat in deserunt pariatur consequat cillum dolor dolore duis dolor et. Laboris incididunt quis tempor et eiusmod. Veniam sunt amet officia do id cupidatat et est commodo. Et pariatur proident ex nisi sit mollit est ullamco occaecat ipsum pariatur nostrud. Laboris sunt nulla pariatur magna pariatur.'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [{
      id: '1',
      title: 'Title 1',
      description: 'Uma descrição qualquer: 1',
      content: c,
      created_by: '1',
      block_id: '1',
      status_id: '1',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '2',
      title: 'Title 2',
      description: 'Uma descrição qualquer: 2',
      content: c,
      created_by: '1',
      block_id: '1',
      status_id: '2',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '3',
      title: 'Title 3',
      description: 'Uma descrição qualquer: 3',
      content: c,
      created_by: '1',
      block_id: '1',
      status_id: '3',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '4',
      title: 'Title 4',
      description: 'Uma descrição qualquer: 4',
      content: c,
      created_by: '2',
      block_id: '1',
      status_id: '1',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '5',
      title: 'Title 5',
      description: 'Uma descrição qualquer: 5',
      content: c,
      created_by: '1',
      block_id: '2',
      status_id: '1',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '6',
      title: 'Title 6',
      description: 'Uma descrição qualquer: 6',
      content: c,
      created_by: '1',
      block_id: '3',
      status_id: '3',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: '7',
      title: 'Title 7',
      description: 'Uma descrição qualquer: 7',
      content: c,
      created_by: '1',
      block_id: '4',
      status_id: '3',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
