const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/meubanco')

const Wigs = sequelize.define('wigs', { 
    name: {
        type: DataTypes.STRING
    },
    color: {
        type: DataTypes.STRING
    },
    size: {
        type: DataTypes.FLOAT
    },
    format: {
        type: DataTypes.STRING
    },
    texture: {
        type: DataTypes.STRING
    },
});

module.exports = {
    sequelize,
    Wigs,
};