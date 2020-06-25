const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Treatment = sequelizeInstance.define("Treatment", {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    startDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    endDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

module.exports = Treatment;
