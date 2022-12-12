const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const JournalRouter = require('./JournalRouter')
const PageRouter = require('./PageRouter')

Router.use('/users', UserRouter)
Router.use('/journals', JournalRouter)
Router.use('/pages', PageRouter)

module.exports = Router
