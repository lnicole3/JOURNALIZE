const { User } = require('../models')

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const getOneUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const getUserByEmail = async (req, res) => {
  try {
    let userEmail = req.params.user_email
    const user = await User.findOne({ where: { email: userEmail } })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const updateUserEmail = async (req, res) => {
  try {
    let email = req.params.email
    let updatedUser = await User.update(req.body, {
      where: { email: email },
      returning: true
    })
    res.send(updatedUser)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getUsers,
  getOneUser,
  getUserByEmail,
  updateUserEmail
}
