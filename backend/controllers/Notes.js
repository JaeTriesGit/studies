const Router = require('express').Router()
const Note = require('../models/Note')
const JWT = require('jsonwebtoken')
const User = require('../models/User')

const GetToken = req => {
    const Authorize = req.get('authorization')
    if (Authorize && Authorize.startsWith('Bearer ')) {
        return Authorize.replcae('Bearer ', '')
    }
}

//GET ALL NOTES
Router.get('/', async (req,res) => {
    const n = await Note.find({})
    res.json(n)
})

//GET A NOTExd
Router.get('/:_id', (req,res, next) => {
    const ID = req.params._id
    Note.findById(ID).then(note=>{
        if (note) {
            res.json(note)
        } else {
            res.status(404).end()
        }
    }).catch(error=>next(error))
})

//POST A NOTE
Router.post('/', async (req,res)=>{
    const Body = req.body

    const Decoded = JWT.verify(GetToken(req), process.env.SECRET)

    if (!Decoded.id) {
        return res.status(401).json({
            error:'Invalid Token'
        })
    }

    const user = await User.findById(Decoded.id)

    if (!Body.content) {
        return res.status(400).json({
            error:'Content Missing'
        })
    }

    const note = new Note({
        id:Body.id,
        content:Body.content,
        important:Body.important || false,
        user: user._id
    })

    const Saved = await note.save()
    user.notes = user.notes.concat(Saved._id)
    await user.save()
    res.json(Saved)
})

//DELETE A NOTE
Router.delete('/:id', (req,res, next)=>{
    Note.findByIdAndDelete(req.params.id)
    .then(result=>{
        res.status(204).end()
    }).catch(e=>next(e))
})

//UPDATE A NOTE (PUT) -> Importance
Router.put('/:id', (req,res,next)=>{

    const {content, important} = req.body

    const note = {
        content:Body.content,
        important:Body.important
    }
    Note.findByIdAndUpdate(req.params.id, {content, important}, {new:true, runValidators: true, context:'query'})
    .then(updatedNote=>{
        res.json(updatedNote)
    }).catch(error=>next(error))
})

//UPDATE A NOTE (PATCH)
Router.patch('/:id', (req,res,next)=>{
    const Body = req.body
    const note = {
        content:Body.content,
        important:Body.important
    }
    Note.findByIdAndUpdate(req.params.id, note, {new:true})
    .then(updatedNote=>{
        res.json(updatedNote)
    }).catch(error=>next(error))
})

module.exports = Router