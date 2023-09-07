const Mong = require('mongoose')

const Schema = new Mong.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    number:{
        type:String,
        required:true,
        minlength:8,
        validate: {
            validator: function(e){
                return /\d{3}-\d{3}-\d{4}/.test(e);
            },
            message: 'Not valid number'
        }
    }
})

Schema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id.toString()
        delete obj._id
        delete obj.__v
    }
})

module.exports = Mong.model('Person', Schema)