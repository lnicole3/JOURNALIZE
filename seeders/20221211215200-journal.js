'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('journals', [
      {
        journal_name: '2022',
        user_id: 1,

        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        journal_name: 'Sleep',
        user_id: 1,

        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('journals', null, {})
  }
}
