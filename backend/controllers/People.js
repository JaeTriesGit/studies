const Router = require('express').Router()
const Person = require('../models/Person')

//GET PEOPLE
Router.get('/', async (req,res)=>{
    const p = await Person.find({})
    res.json(p)
})

//GET A PERSON
Router.get('/:_id', (req,res,next)=>{
    const ID = req.params._id
    Person.findById(ID).then(person=>{
        if (person){
            res.json(person)
        } else {
            res.status(404).end()
        }
    }).catch(error=>next(error))
})

//POST A PERSON
Router.post('/', (req,res1,next)=>{
    const Body = req.body

    Person.find({name:Body.name}).then(res=>{
        if (res.length <= 0){
            const NewPerson = new Person({
                id:Body.id,
                name:Body.name,
                number:Body.number
            })
            
            NewPerson.save().then(savedP=>{
                res1.json(savedP)
            }).catch(er=>next(er))
        }
    }).catch(er=>next(er))
})

//DELETE A PERSON
Router.delete('/:id', (req,res,next)=>{
    Person.findByIdAndDelete(req.params.id)
    .then(result=>{
        res.status(204).end()
    }).catch(e=>next(e))
})

//UPDATE A PERSON
Router.put('/:id', (req,res,next)=>{
    const Body = req.body
    
    const person = {
        name:Body.name,
        number:Body.number
    }
    Person.findByIdAndUpdate(req.params.id, person, {new:true})
    .then(updated=>{
        res.json(updated)
    }).catch(error=>next(error))
})

module.exports = Router