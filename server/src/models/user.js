const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
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

})

module.exports = User