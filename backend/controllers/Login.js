const JWT = require('jsonwebtoken')
const bc = require('bcrypt')
const Router = require('express').Router()
const User = require('../models/User')

Router.post('/', async (req,res) => {
    const username = req.body.username
    const password = req.body.password
    const user = await User.findOne({username:username})
    const pwC = await bc.compare(password, user.passHash)

    if (!(user && pwC)) {
        return res.status(401).json({
            error:'asd u forked up m8'+username+password
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

Router.get('/', async(req,res)=>{
    const Got = await User.find({})
    res.json(Got)
})

module.exports = Router