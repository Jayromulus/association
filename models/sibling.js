const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('sibling', {
  name: {
    type: DataTypes.STRING,
    unique: true
  }
})