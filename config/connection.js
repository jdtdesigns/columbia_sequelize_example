const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('circus_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;