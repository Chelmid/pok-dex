const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
//permet de connecter a mongoose
mongoose.Promise = global.Promise
// server
mongoConnectionString = "mongodb+srv://root:root@cluster1.s0peq.mongodb.net/test"
//promise de la connection
mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true}) .then(() => console.log("MongoDB Connected..."))
.catch((err) => console.log(err));
//connection
const connection = mongoose.connection;

console.log(connection)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
//connection du serveur dnas le port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})