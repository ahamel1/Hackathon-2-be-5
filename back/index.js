require("dotenv").config();
const express = require("express");
const app = express();
const port = 5050;
const sequelize = require("./sequelize");

const users = require("./routes/users.route");

app.use(express.json());
app.use("/users", users);
// permet de renvoyer un json

app.get("/", (req, res) => {
    res.status(200).send("Bienvenue sur Doctothron");
});

sequelize
    .sync({ force: true })
    .then(() => {
        return sequelize.authenticate();
    })
    .then(() => {
        app.listen(port, (err) => {
            if (err) {
                throw new Error("Something really bad happened ...");
            }
            console.log(`Server is listening on ${port}`);
        });
    })
    .catch((err) => {
        console.log("enable to join database", err.message);
    });
