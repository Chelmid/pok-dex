const express = require('express')
const app = express()
const port = 4000
var router = express.Router();
// require pour la connexion
const connect = require('./ConnectDatabase')
const mongoose = require('mongoose');
const axios = require('axios')


app.use(express.json())

//status de la connaxion du server
/*if (mongoose.connection.readyState === 2) {
    console.log(mongoose.connection.readyState, 'connecting ...')
    mongoose.connection.on('connected', () => {
        console.log(mongoose.connection.readyState, 'connected ...')
        app.get('/', (req, res) => {
            res.redirect('/sucessConnection')
        })

    })
} else {
    console.log(mongoose.connection.readyState, 'disconnected ...')
    app.get('/', (req, res) => {
        res.redirect('/error')
    })
};*/

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    //autorisation pour le front a acceder au données
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    next();
});

app.post('/register', (req, res) => {
    //status de la connaxion du server

    if (mongoose.connection.readyState === 1) {

        //init models empty
        mongoose.models = {}

        //schema des fields
        const schema = new mongoose.Schema({ email: 'string', name: 'string', password: 'string' });
        // selection des du models et fields
        const Users = mongoose.model('Users', schema);

        // find email si pas dans la base de données
        Users.findOne({ email: req.body.email }, function (err, docs) {
            if (docs === null) {
                Users.create({ email: req.body.email, name: req.body.name, password: req.body.password }, (err, small) => {
                    if (err) return handleError(err);
                    // saved!
                });
                app.get('/register', (req, res) => {
                    res.json({
                        msg: 'compte est bien créee',
                    })
                })
                console.log('vide')
            }
            else {
                console.log("First function call : ", docs);
                app.get('/register', (req, res) => {
                    res.json({
                        msg: 'compte deja',
                    });
                })
                console.log('exitant')
            }
        });

    } else {
        console.log('error')
    }
})

//connection du serveur dnas le port 4000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})