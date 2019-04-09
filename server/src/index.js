const express = require('express');
require('./db/mongoose')
const User = require('./models/user')
const bodyParser = require('body-parser');
const authenticate = require('./middleware/authenticate')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', authenticate ,async (req,res) => {

})

app.listen(port,() => {
    console.log(`listen on port ${port}`)
})