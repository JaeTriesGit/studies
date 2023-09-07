const JWT = require('jsonwebtoken')
const bc = require('bcrypt')
const Router = require('express').Router()
const User = require('../models/User')

Router.post('/', async (req,res) => {
    const {un,pw} = req.body//un=usrnme pw=pass oBVIOUSLYadaspdo0s
    const user = await User.findOne({un})
    const pwC = user === null ? false : await bc.compare(pw, user.passwordHash)

    if (!(user && pwC)) {
        return res.status(401).json({
            error:'asd u forked up m8'
        })
    }

    const userToken = {
        username: user.username,
        id: user._id
    }

    const T0ken = JWT.sign(
        userToken, 
        process.env.SECRET,
        {expiresIn:60*60}
    )

    res.status(200).send({
        T0ken, 
        username: user.username, 
        name: user.name
    })
}) 

module.exports = Router