'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Page.belongsTo(models.Journal, { foreignKey: 'journal_id' })
    }
  }
  Page.init(
    {
      journal_entry: DataTypes.STRING,
      mood: DataTypes.STRING,
      journal_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: { model: 'journals', key: 'id' }
      }
    },
    {
      sequelize,
      modelName: 'Page',
      tableName: 'pages'
    }
  )
  return Page
}
