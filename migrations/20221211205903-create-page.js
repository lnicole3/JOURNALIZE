'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      journal_entry: {
        type: Sequelize.STRING
      },
      mood: {
        type: Sequelize.STRING
      },
      journal_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'journals', key: 'id' }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pages')
  }
}
