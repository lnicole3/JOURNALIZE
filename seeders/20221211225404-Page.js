'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pages', [
      {
        journal_entry: 'Oh what a day.  I had to make my project twice.',
        mood: 'drained but optimistic',
        journal_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        journal_entry: 'I slept 2 hours today',
        mood: 'sleepy',
        journal_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pages', null, {})
  }
}
