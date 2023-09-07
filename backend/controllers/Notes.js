const Router = require('express').Router()
const Note = require('../models/Note')

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
Router.post('/', (req,res, next)=>{
    const Body = req.body

    if (!Body.content) {
        return res.status(400).json({
            error:'Content Missing'
        })
    }

    const note = new Note({
        id:Body.id,
        content:Body.content,
        important:Body.important || false
    })

    note.save().then(savedNote => {
        res.json(savedNote)
    }).catch(er=>next(er))
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