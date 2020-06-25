require("dotenv").config();
const Sequelize = require("sequelize");
const { DBNAME, DBPASS, DBUSER, DBDIALECT } = process.env;

module.exports = new Sequelize({
    host: "localhost", //todo rajoutez DBHOST?
    username: DBUSER,
    password: DBPASS,
    database: DBNAME,
    dialect: DBDIALECT,
});
