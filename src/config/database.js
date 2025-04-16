const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/meubanco')

module.exports = sequelize;