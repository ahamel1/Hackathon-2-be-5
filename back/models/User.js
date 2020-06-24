const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const User = sequelizeInstance.define("User", {
    id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    lastName: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING(14),
        allowNull: false,
        validate: {
            max: 14,
            min: 8,
        },
    },

    phone_number: {
        type: Sequelize.INTEGER(15),
        allowNull: false,
    },
});

module.exports = User;
