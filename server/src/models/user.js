const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(value.length < 6 || value.includes('password')){
                throw new Error('Reset your password!')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim:　true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email !')
            }
        }
    },
    nickname: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    targetWeight: {
        type: Number,
        required: true
    }

})

const User = mongoose.model('User',userSchema)

module.exports = User