const Mong = require('mongoose')

const Schema = new Mong.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        required:true
    }
    
})

Schema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id.toString()
        delete obj._id
        delete obj.__v
    }
})

module.exports = Mong.model('BlogPost', Schema)