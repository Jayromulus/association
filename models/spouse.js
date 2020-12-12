const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('spouse', {
  name: {
    type: DataTypes.STRING,
    unique: true
  }
})