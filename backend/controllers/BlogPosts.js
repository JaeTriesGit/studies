const Router = require('express').Router()
const BlogPost = require('../models/BlogPost')

//GET ALL BLOG POSTS
Router.get('/', async (req,res) => {
    const Notes = await BlogPost.find({})
    res.json(Notes)
})

//GET A BLOG POST
Router.get('/:_id', (req,res, next) => {
    const ID = req.params._id
    BlogPost.findById(ID).then(note=>{
        if (note) {
            res.json(note)
        } else {
            res.status(404).end()
        }
    }).catch(error=>next(error))
})

//POST A BLOG POST
Router.post('/', (req,res,next)=>{
    const Blog = new BlogPost(req.body)
    Blog.save()
    .then(result=>{res.status(201).json(result)})
    .catch(e=>next(e))
})

module.exports = Router