"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users_Blocks", {
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      blockId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "block",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      access: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      removed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
