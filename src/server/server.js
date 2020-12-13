const express = require('express')
const app = express()
const port = 3000

const connection = require('./ConnectDatabase')
// connection
connection

console.log(connection)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
//connection du serveur dnas le port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})