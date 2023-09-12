const Mong = require('mongoose')

const userSchema = Mong.Schema({
    username: String,
    name: String,
    passHash: String,
    notes: [
        {
            type: Mong.Schema.Types.ObjectId,
            ref:'Note'
        }
    ],
    blogposts: [
        {
            type: Mong.Schema.Types.ObjectId,
            ref:'BlogPost'
        }
    ]
})

userSchema.set('toJSON', {
    transform: (doc, obj) => {
        obj.id = obj._id.toString()
        delete obj._id
        delete obj.__v
        delete obj.passHash
    }
})

const User = Mong.model('User', userSchema)

module.exports = User