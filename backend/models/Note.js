const Mong = require('mongoose')

//We can set minimum length, required etc. for our schema values
const Schema = new Mong.Schema({
    content: {
        type: String,
        minlength: 5,
        required: true
    },
    important:Boolean,
    user:{
        type:String,
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

module.exports = Mong.model('Note', Schema)