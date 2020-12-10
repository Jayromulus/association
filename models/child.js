const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('child', {
  name: {
    type: DataTypes.STRING,
    unique: true
  }
})