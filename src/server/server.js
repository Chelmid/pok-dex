const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');

mongoose.Promise = global.Promise

mongoConnectionString = "mongodb+srv://root:root@cluster1.s0peq.mongodb.net/test"

mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true}) .then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(err));

const connection = mongoose.connection;

console.log(connection)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})