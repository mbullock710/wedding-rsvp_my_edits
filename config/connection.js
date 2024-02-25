const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // Use JAWSDB_URL for Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Fallback to localhost if JAWSDB_URL isn't set
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  });
}

module.exports = sequelize;module.exports = sequelize;