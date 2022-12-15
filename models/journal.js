'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Journal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Journal.hasMany(models.Page, { foreignKey: 'journal_id' })
      Journal.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  Journal.init(
    {
      journal_name: DataTypes.STRING,
      user_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'users', key: 'id' }
      }
    },
    {
      sequelize,
      modelName: 'Journal',
      tableName: 'journals'
    }
  )
  return Journal
}
