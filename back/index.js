require("dotenv").config();
const express = require("express");
const app = express();
const port = 5050;
const sequelize = require("./sequelize");

const users = require("./routes/users.route");
const drugs = require("./routes/drugs.route");
const treatments = require("./routes/treatments.route");
const intakes = require("./routes/intakes.route");

app.use(express.json());
app.use("/drugs", drugs);
app.use("/users", users);
app.use("/treatments", treatments);
app.use("/intakes", intakes);
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
