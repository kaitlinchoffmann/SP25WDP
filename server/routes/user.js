const express = require("express")
const User = require("../models/user")
const router = express.Router()

router
.get('/getUsers', async (req, res) => {
  try {
    const users = await User.getAllUsers()
    res.send(users)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.post('/login', async (req, res) =>{
  try {
    const user = await User.login(req.body)
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.post('/register', async (req, res) => {
  try {
    const user = await User.register(req.body)
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.put('/update', async (req, res) => {
  try {
    const user = await User.editUsername(req.body)
    res.send({...user, password: undefined})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.delete('/deleteAccount', async (req, res) => {
  try {
    await User.deleteAccount(req.body)
    res.send({success: "HOW DARE YOU!!! I did everything for you!!!!! You will come to regret this...this is a THREAT!!! >:(((("})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router