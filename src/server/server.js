const express = require('express')
const app = express()
const port = 3000

const connect = require('./ConnectDatabase')
const mongoose = require('mongoose');

if(mongoose.connection.readyState === 2){
    console.log(mongoose.connection.readyState , 'connecting ...')
mongoose.connection.on('connected', () => {
        console.log(mongoose.connection.readyState , 'connected ...')
        app.get('/', (req, res) => {
            res.redirect('/sucessConnection')
        })
    
})};


app.get('/save', (req, res) => {
    res.send('Hello World!')
    const schema = new mongoose.Schema({ name: 'string', size: 'string' });
    const Tank = mongoose.model('Tank', schema);
    console.log(Tank)
    Tank.create({ size: 'small' }, (err, small) => {
        if (err) return handleError(err);
        // saved!
    });
})

app.get('/sucessConnection', (req, res) => {
    res.send('connection success server')
})

//connection du serveur dnas le port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})