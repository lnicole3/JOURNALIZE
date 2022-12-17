const config = require(__dirname + '/../config/config.js')[env]
module.exports = {
  development: {
    database: 'journalize_development',
    dialect: 'postgres'
  },
  test: {
    database: 'journalize_development_test',
    dialect: 'postgres'
  },
  production: 'DATABASE_URL',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      require: true
    }
  }
}
