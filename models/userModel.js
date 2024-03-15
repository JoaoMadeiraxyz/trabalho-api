const { DataTypes } = require("sequelize");
const db = require("../infrastructure/db");

module.exports = db.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.NUMBER,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.ENUM,
    values: ["ACTIVE", "INACTIVE"],
    allowNull: false,
    defaultValue: "ACTIVE",
  },
});
