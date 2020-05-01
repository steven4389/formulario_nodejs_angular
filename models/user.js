const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: Sequelize.STRING,
    },
    Apellido: {
      type: Sequelize.STRING,
    },
    Tipo_Doc_id: {
      type: Sequelize.STRING,
    },
    docIdent: {
      type: Sequelize.STRING,
    },
    Email: {
      type: Sequelize.STRING,
    },
    Celular: {
      type: Sequelize.STRING,
    },
    FechaNacimiento: {
      type: Sequelize.DATE,
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    timestamps: false,
  }
);
