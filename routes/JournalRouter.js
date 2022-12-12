const Router = require('express').Router()
const controller = require('../controllers/JournalController')

Router.get('/', controller.getJournals)
Router.get('/:id', controller.getJournalById)

module.exports = Router
