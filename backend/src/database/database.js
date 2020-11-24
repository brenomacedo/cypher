const { Sequelize } = require('sequelize')
const config = require('../database/config')
module.exports = new Sequelize(config)