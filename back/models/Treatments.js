const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Treatment = sequelizeInstance.define("Treatment", {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    duration: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
    },
});

module.exports = Treatment;
