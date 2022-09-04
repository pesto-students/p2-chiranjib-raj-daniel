const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name id is required"],
    },
    email:{
        type: String,
        required: [true, "Email id is required"],
        unique:true,
        lowercase:true
    },
    password:{
        type: String,
        required: [true, "password id is required"],
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User;