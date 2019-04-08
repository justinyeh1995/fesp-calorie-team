const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/calories-app',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:　false
})
