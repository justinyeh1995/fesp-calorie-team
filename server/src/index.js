const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const userRouter = require('./routers/user');


app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter);


app.listen(port,() => {
    console.log(`listen on port ${port}`)
})