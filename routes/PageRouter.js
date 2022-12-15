const Router = require('express').Router()
const controller = require('../controllers/PageController')

Router.get('/journal/:id', controller.getJournalPages)
Router.get('/', controller.getPages)
Router.get('/:page_id', controller.getPageById)
Router.post('/', controller.addPage)
Router.put('/:page_id', controller.updatePage)
Router.delete('/:page_id', controller.deletePage)

module.exports = Router
