const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Intakes = sequelizeInstance.define("Intakes", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  datetime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  used: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  dosage: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Intakes;
