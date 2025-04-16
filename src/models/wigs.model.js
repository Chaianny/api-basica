const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const Wigs = sequelize.define("wigs", {
  name: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  size: {
    type: DataTypes.FLOAT,
  },
  format: {
    type: DataTypes.STRING,
  },
  texture: {
    type: DataTypes.STRING,
  },
});

module.exports = Wigs;
