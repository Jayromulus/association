const { DataTypes } = require('sequelize')
const db = require('../db')

module.exports = db.define('user', {
  name: DataTypes.STRING
})