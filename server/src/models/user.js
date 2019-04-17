const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    targetweight: {
        type: Number,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]

})


userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()},'calorie')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}


userSchema.statics.findByCredentials = async (email,password) => {
    const user = await User.findOne({ email })

    if(!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch) {
        throw new Error('unable to login')
    }

    return user;
}

userSchema.pre('save',async function(next) {
    const user = this;

    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})


const User = mongoose.model('User',userSchema)

module.exports = User