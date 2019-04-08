const express = require('express');
require('./db/mongoose')


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.listen(port,() => {
    console.log(`listen on port ${port}`)
})