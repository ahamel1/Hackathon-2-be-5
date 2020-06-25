require("dotenv").config();
const express = require("express");
const cors = require("cors");


const sequelize = require("./sequelize");
require("./associations")

const auth = require("./routes/auth.route");
const users = require("./routes/users.route");
const drugs = require("./routes/drugs.route");
const treatments = require("./routes/treatments.route");
const intakes = require("./routes/intakes.route");

const User = require("./models/User")
const {authToken} = require("./middlewares")


// Bar.belongsToMany(Foo, {
//     as: "Foo",
//     through: "rel",
//     foreignKey: "customNameForBar", // Custom name for column in rel referencing to Bar
//     sourceKey: "name", // Column in Foo which rel will reference to
//   });



const app = express();
const port = 5050;

app.use(cors({
    origin: process.env.FRONT_URL
}))
app.use(express.json());
app.use("/auth", auth);
app.use("/drugs", drugs);
app.use("/users", users);
app.use("/treatments", treatments);
app.use("/intakes", intakes);
// permet de renvoyer un json

app.get("/", (req, res) => {
    res.status(200).send("Bienvenue sur Doctothron");
});

app.get("/me", authToken, async (req, res) => {
const {id} = req.user
    try {
        const me = await User.findOne({
            where: { id},
            attributes: {
                exclude : ["password"]
            }
        })
        res.status(200).json(me)
    } catch (error) {
        
    }
})

sequelize
    .sync({ alter: true })
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
