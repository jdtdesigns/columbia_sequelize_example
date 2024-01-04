const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Performer extends Model { }

Performer.init({ // fields/columns object
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  skill: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { // options object
  sequelize: sequelize, // required
  modelName: 'performer', // describing your table name
  // freezeTableName: true
});

module.exports = Performer;