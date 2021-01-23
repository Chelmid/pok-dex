const express = require('express')
const app = express()
const port = 4000
var router = express.Router();
// require pour la connexion
const connect = require('./ConnectDatabase')
const mongoose = require('mongoose');
const axios = require('axios')
const path = require("path");



app.use(express.static("public"));
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


app.get("/", function (req, res) { 
    res.sendFile(path.join(__dirname, "public", "index.html"));
}); 

app.get("/login", function (req, res) { 
    res.send('login')
});

app.get("/register", function (req, res) { 
    res.send('register')
});

app.post('/register', (req, res) => {
    //status de la connaxion du server

     //init models empty
     mongoose.models = {}

    if (mongoose.connection.readyState === 1) {

        //schema des fields
        const schema = new mongoose.Schema({ email: 'string', name: 'string', password: 'string' });
        // selection des du models et fields
        const Users = mongoose.model('Users', schema);

        // find email si pas dans la base de données
        Users.findOne({ email: req.body.email }).exec(function (err, docs) {
            if (docs !== {}) {
                return res.redirect('http://localhost:3000/login');
                console.log('exitant');
            }
            else {
                Users.create({ email: req.body.email, name: req.body.name, password: req.body.password }, (err, small) => {
                    if (err) return handleError(err);
                    // saved!
                });
                console.log('vide');
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