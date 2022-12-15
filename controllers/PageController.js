const { Page } = require('../models')
const { Journal } = require('../models')

const getPages = async (req, res) => {
  try {
    const pages = await Page.findAll()
    res.send(pages)
  } catch (error) {
    throw error
  }
}

const getJournalPages = async (req, res) => {
  try {
    const journalId = parseInt(req.params.id)
    const page = await Page.findAll({ where: { journal_id: journalId } })
    res.send(page)
  } catch (error) {
    throw error
  }
}

const addPage = async (req, res) => {
  try {
    let pageContent = {
      ...req.body
    }
    let page = await Page.create(pageContent)
    res.send(page)
  } catch (error) {
    throw error
  }
}

const updatePage = async (req, res) => {
  try {
    let PageId = parseInt(req.params.page_id)
    let updatedPage = await Page.update(req.body, {
      where: { id: PageId },
      returning: true
    })
    res.send(updatedPage)
  } catch (error) {
    throw error
  }
}

const deletePage = async (req, res) => {
  try {
    let pageId = parseInt(req.params.page_id)
    await Page.destroy({ where: { id: pageId } })
    res.send({ message: `Deleted Page with ID of ${pageId}` })
  } catch (error) {
    throw error
  }
}

const getPageById = async (req, res) => {
  try {
    const page = await Page.findByPk(req.params.page_id)
    res.send(page)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getPages,
  getJournalPages,
  addPage,
  updatePage,
  deletePage,
  getPageById
}
