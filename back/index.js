require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const cron = require("node-cron");

const sequelize = require("./sequelize");
require("./associations");

const mail = require("./routes/mailer.route");
const auth = require("./routes/auth.route");
const users = require("./routes/users.route");
const drugs = require("./routes/drugs.route");
const treatments = require("./routes/treatments.route");
const intakes = require("./routes/intakes.route");

const User = require("./models/User");
const Drugs = require("./models/Drugs");
const InTakes = require("./models/InTakes");
const Treatment = require("./models/Treatments");
const { authToken } = require("./middlewares");

const app = express();
const port = 5050;

app.use(
  cors({
    origin: process.env.FRONT_URL,
  })
);
app.use(express.json());
app.use("/mail", mail);
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
  const { id } = req.user;
  try {
    const me = await User.findOne({
      where: { id },
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).json(me);
  } catch (error) {}
});

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2ac622624e8532",
    pass: "918f4d6973015d",
  },
});

/**
 * install node-cron
 * every XXmin with node-cron :
 * Intakes.findAll() -> intakes[]
 * loop intakes[]
 * if !used && datetime <= Date.now()
 *      sendEmail
 *
 * https://scotch.io/tutorials/nodejs-cron-jobs-by-examples
 */
cron.schedule("* 5 * * * *", async () => {
  console.log("---------------------");
  console.log("Running Cron Job");

  try {
    const intakes = await InTakes.findAll({
      include: [
        {
          model: Treatment,
          attributes: ["id"],
          include: [
            {
              model: User,
              attributes: ["email"],
            },
          ],
        },
        {
          model: Drugs,
          attributes: ["name"],
        },
      ],
    });

    intakes.forEach(async (int) => {
      const email = int.Treatment.User.email;
      const drugName = int.Drug.name;

      const date = new Date(int.datetime).getTime();
      const now = new Date().getTime() + 7200000;

      if (!int.used && date <= now) {
        const info = await transporter.sendMail({
          from: "reminder@doctothon.org",
          to: email,
          subject: `REMINDER`,
          // text: `Hi, did you take your ${drugName} ?`,
          html: `
          <div>
        <h2>Hi Basile, how are you ?</h2>
        <p>I think you forgot to take your medicine !</p>
        <p>Let's take it !</p>
        <img
          src="https://media1.giphy.com/media/4Hq29KXEzQfsqiqYOO/giphy.gif?cid=ecf05e47a16251a1b3548d1fbe7239c7f8803c9a1fb057ab&rid=giphy.gif"
          alt="gif"
        ></img>
      </div>
          `,
        });
        console.log(info);
      }
    });
  } catch (err) {
    console.log(err);
  }
});

sequelize
  .sync()
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
