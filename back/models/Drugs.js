const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Drug = sequelizeInstance.define("Drug", {
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
    dosage: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    molecule: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
});

module.exports = Drug;
