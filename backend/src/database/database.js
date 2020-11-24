const { Sequelize } = require('sequelize')
const config = require('../database/config')
export default new Sequelize(config)