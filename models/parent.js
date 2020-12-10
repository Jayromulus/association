const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('parent', {
  name: {
    type: DataTypes.STRING,
    unique: true
  }
})