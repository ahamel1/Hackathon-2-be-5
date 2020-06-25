require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken")

const secret = process.env.SECRET || "asdldhjaskljdaskljd"

const User = require("../models/User")

const router = express.Router()

router.post("/login", async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.findOne({
      where : {email}
    })

    if (!user) {
      res.status(404).json({
        message: "User not found"
      })
    }
    console.log(user)

    const isPasswordValid = user.checkPassword(password)

    console.log(isPasswordValid)

    if (isPasswordValid) {
      console.log("hey")
      const payload = {
        id : user.dataValues.id,
        email: user.dataValues.email
      }
//création du token avec payload(id, email) et secret 
      const token = jwt.sign(payload, secret, {
        expiresIn: "24h"
      })

      delete user.dataValues.password

      res.status(200).json({
        token,
        user
      })
    }
  
  } catch (error) {
  }
  

})



module.exports = router