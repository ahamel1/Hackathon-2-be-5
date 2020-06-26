const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    let transporter = nodemailer.createTransport({
      // host: "smtp.mailtrap.io",
      // port: 2525,
      // auth: {
      //   user: "89c6945d5b9cf3",
      //   pass: "36e921cbf8d6ac",
      // },
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "delfina.becker73@ethereal.email",
        pass: "BT8TPnZS8VRBG4K7Pe",
      },
    });

    const success = await transporter.verify();

    let info = await transporter.sendMail({
      from: "'Basile' <basile.vernouillet@wildcodeschool.com>",
      to: "basile.vernouillet@wildcodeschool.com",
      subject: "Test",
      text: "Hello world",
      html: "<b>Hello world?</b>",
    });
    res.status(200).json({ success, info });
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
