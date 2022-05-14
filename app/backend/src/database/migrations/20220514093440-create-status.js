"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Status", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      priority: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: "user",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
      blockId: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: "block",
          key: "id",
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Status");
  },
};
