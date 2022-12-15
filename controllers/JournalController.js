const { Journal } = require('../models')

const getJournals = async (req, res) => {
  try {
    const journals = await Journal.findAll()
    res.send(journals)
  } catch (error) {
    throw error
  }
}

const getJournalById = async (req, res) => {
  try {
    const journal = await Journal.findByPk(req.params.id)
    res.send(journal)
  } catch (error) {
    throw error
  }
}

const createJournal = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let journalContent = {
      user_id: userId,
      ...req.body
    }
    let journal = await Journal.create(journalContent)
    res.send(journal)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getJournals,
  getJournalById,
  createJournal
}
