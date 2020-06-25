require("dotenv").config()
const jwt = require("jsonwebtoken")

const secret = process.env.SECRET || "asdldhjaskljdaskljd"

const authToken = (req, res, next) => {
  const {authorization} = req.headers

  if (!authorization) {
      res.status(401).json({
      message: "No Authorization header"
    })
  }
//on split avec le séparateur espace
  const token = authorization.split(" ")[1]

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      res.status(401).json(err)
    }

    req.user = {id: decoded.id, email: decoded.email}
    next()


  })

}


module.exports = {
authToken
}

// axios.post("dkasjdklasj", {...data}, {
//   headers : {
//     "Authorization" : `Bearer ${tontoken}`
//   }
// })