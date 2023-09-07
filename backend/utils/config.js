require('dotenv').config()

let PORT = process.env.PORT
let MONG = process.env.MONGO

module.exports = {
    MONG, PORT
}