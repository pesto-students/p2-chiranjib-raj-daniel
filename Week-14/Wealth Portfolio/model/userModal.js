const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"],
    },
    email:{
        type: String,
        required: [true, "Email id is required"],
        unique:true,
        lowercase:true
    },
    password:{
        type: String,
        required: [true, "password is required"],
        select:false,
        minlength:8
    }
})

userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12)
})

userSchema.methods.correctPassword = async function(givenPassword, dbPassword){
    return await bcrypt.compare(givenPassword, dbPassword)
}
const User = mongoose.model('User', userSchema)

module.exports = User;