const exp = require('express')
require('dotenv').config()
const Morgan = require('morgan')
const Mongoose = require('mongoose')
const Cors = require('cors')
const APP = exp()
const PORT = process.env.PORT || 5175
const URL = process.env.MONGO

const NotesRouter = require('./controllers/Notes')
const PeopleRouter = require('./controllers/People')
const BlogRouter = require('./controllers/BlogPosts')
const UsersRouter = require('./controllers/Users')
const LoginRouter = require('./controllers/Login')

Mongoose.set('strictQuery', false)

Mongoose.connect(URL).then(res=>{
}).catch((error)=>{
    console.log('Error: '+error)
})

APP.use(exp.json())
APP.use(Morgan(function(t,req,res){ //m0rgan s3tup
    return[
        t.method(req,res), ' ',
        t.url(req,res), ' ',
        t.status(req,res), ' ',
        t.res(req,res,'content-length'), ' | ',
        t['response-time'](req,res), 'ms |', 
        JSON.stringify(req.body)
    ].join('')
}))
APP.use(Cors())

APP.use('/api/notes', NotesRouter)
APP.use('/api/people', PeopleRouter)
APP.use('/api/blogs', BlogRouter)
APP.use('/api/users', UsersRouter)
APP.use('/api/login', LoginRouter)

module.exports = APP