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
        allowNull: true,
    },
});

module.exports = Intakes;

// Sequelize.DATE                        // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
// Sequelize.DATE(6)                     // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
// Sequelize.DATEONLY                    // DATE without time.
