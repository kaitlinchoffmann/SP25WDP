const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.get('/getUsers', async (req, res) => {
  try {
    const users = await User.getAllUsers()
    res.send(users)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

 "http://localhost:3000/users/getUsers"

module.exports = router