const express = require('express')
const app = express()
const port = 4000
var router = express.Router();
// require pour la connexion
const connect = require('./ConnectDatabase')
const mongoose = require('mongoose');

const axios = require('axios');

app.use(express.json())

//status de la connaxion du server
if (mongoose.connection.readyState === 2) {
    console.log(mongoose.connection.readyState, 'connecting ...')
    mongoose.connection.on('connected', () => {
        console.log(mongoose.connection.readyState, 'connected ...')
        app.get('/', (req, res) => {
            res.redirect('/sucessConnection')
        })

    })
}else {
    console.log(mongoose.connection.readyState, 'disconnected ...')
    app.get('/', (req, res) => {
        res.redirect('/error')
    })
};

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    //autorisation pour le front a acceder au données
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
    next();
  });

app.get('/api/message', (req, res) => {
    res.send({
        msg:'le message est la',
    })
})

app.get('/error', (req, res) => {
    res.send('connection error server')
})


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


app.post('/register', (req, res) => {
    console.log(req.body.email)
    res.send('succezs')
})

//connection du serveur dnas le port 4000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})