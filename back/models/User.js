const Sequelize = require("sequelize");
const bcrypt = require("bcrypt")

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
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
    phone_number: {
        type: Sequelize.INTEGER(15),
        allowNull: false,
    },
}, {
    hooks: {
        beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt)
        }
    }
});

User.prototype.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}


module.exports = User;
