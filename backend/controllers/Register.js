const bc = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/User')

usersRouter.post('/', async (req,res) => {
    const username = req.body.username
    const pass = req.body.password
    const name = req.body.name
    const salt = 10
    const passHash = await bc.hash(pass, salt)

    const user = new User({
        username,
        name,
        passHash
    })

    const savedUser = await user.save()

    res.status(201).json(savedUser)
})

module.exports = usersRouter