const express = require('express')
const app = express()
const port = process.env.PORT || 4000
var router = express.Router();
// require pour la connexion
const connect = require('./ConnectDatabase')
const mongoose = require('mongoose');
const axios = require('axios')
const path = require("path");

import favicon from "serve-favicon";
server.use(favicon(path.join(__dirname, "../assets/images/favicon.ico")));

//use express
app.use(express.static("public"));
app.use(express.json())

// CORS permission
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    //autorisation pour le front a acceder au données
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    next();
});

//home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


//login 
app.get("/login/success", (req, res) => {
    res.send({ message: 'connecter' })
});

app.get("/login/error", (req, res) => {
    res.send({ message: 'adresse mail ou mot de passe incorrect' })
});

app.post("/login", (req, res) => {
    //init models empty
    mongoose.models = {}

    if (mongoose.connection.readyState === 1) {

        //schema des fields
        const schema = new mongoose.Schema({ email: 'string', name: 'string', password: 'string' });
        // selection des du models et fields
        const Users = mongoose.model('Users', schema);

        // find email si pas dans la base de données
        Users.findOne({ email: req.body.email, password: req.body.password }).exec((err, docs) => {
            if (docs == null) {
                console.log(docs)
                res.redirect('/login/error');
            } else {
                console.log(docs)
                res.redirect('/login/success');
            }
        });

    } else {
        console.log('error')
    }
})

// register
app.get("/register/error", (req, res) => {
    res.send({ message: 'compte déjà existant' })
});

app.get("/register/success", (req, res) => {
    res.send({ message: 'compte crée' })
});

app.post('/register', (req, res) => {
    //status de la connexion du server

    //init models empty
    mongoose.models = {}

    if (mongoose.connection.readyState === 1) {

        //schema des fields
        const schema = new mongoose.Schema({ email: 'string', name: 'string', password: 'string', pokemonTeam: 'object', pokemonCapture: 'object' });
        // selection des du models et fields
        const Users = mongoose.model('Users', schema);

        // find email si pas dans la base de données
        Users.findOne({ email: req.body.email }).exec((err, docs) => {
            if (docs == null) {
                Users.create({ email: req.body.email, name: req.body.name, password: req.body.password, pokemonTeam: { "id": [] }, pokemonCapture: {'id' : []} }, (err, small) => {
                    if (err) return handleError(err);
                    // saved!
                });
                console.log(docs);
                console.log('vide');
                res.redirect('/register/success');
            }
            else {
                console.log(docs);
                console.log('exitant');
                res.redirect('/register/error');
            }
        });

    } else {
        console.log('error')
    }
})

//add team
app.put('/pokemon/list/addTeam', (req, res) => {
    mongoose.models = {}

    if (mongoose.connection.readyState === 1) {

        //schema des fields
        const schema = new mongoose.Schema({ email: 'string', name: 'string', password: 'string', pokemonTeam: { "id": [] }, pokemonCapture: {'id' : []} });
        // selection des du models et fields
        const Users = mongoose.model('Users', schema);

        // find email si pas dans la base de données
        Users.findOne({ email: req.body.email }).exec((err, docs) => {
            if (docs == null) {
                console.log(docs);
                console.log(req.body.pokemonTeams.id)
                console.log('vide');
                res.send({ message: 'error' })
            }
            else {
                console.log(req.body.pokemonTeams.id)
                console.log(docs);
                docs.pokemonTeam.id = req.body.pokemonTeams.id
                docs.save();

                console.log('exitant');
                res.send({ id : docs.pokemonTeam.id })
            }
        });

    } else {
        console.log('error')
    }
})

// rempve team 
app.put('/pokemon/list/removeTeam', (req, res) => {
    mongoose.models = {}

    if (mongoose.connection.readyState === 1) {

        //schema des fields
        const schema = new mongoose.Schema({ email: 'string', name: 'string', password: 'string', pokemonTeam: { 'id': [] }, pokemonCapture: {'id' : []} });
        // selection des du models et fields
        const Users = mongoose.model('Users', schema);

        // find email si pas dans la base de données
        Users.findOne({ email: req.body.email }).exec((err, docs) => {
            if (docs == null) {
                console.log(docs);
                console.log(req.body.pokemonTeams.id)
                console.log('vide');
                res.send({ message: 'error' })
            }
            else {
                console.log(req.body.pokemonTeams.id)
                console.log(docs);
                docs.pokemonTeam.id = req.body.pokemonTeams.id
                docs.save();

                console.log('exitant');
                res.send({ id : docs.pokemonTeam.id })
            }
        });

    } else {
        console.log('error')
    }
})

//load
app.post('/pokemon/list', (req, res) => {
    mongoose.models = {}

    if (mongoose.connection.readyState === 1) {

        //schema des fields
        const schema = new mongoose.Schema({ email: 'string', name: 'string', password: 'string', pokemonTeam: { "id": [] }, pokemonCapture: {'id' : []} });
        // selection des du models et fields
        const Users = mongoose.model('Users', schema);

        // find email si pas dans la base de données
        Users.findOne({ email: req.body.email }).exec((err, docs) => {
            console.log(req.body.email)
            if (docs == null) {
                console.log(docs);
                console.log('vide');
                res.send({ message: 'error' })
            }
            else {
                console.log(docs);
                console.log('exitant');
                res.send({ idTeam : docs.pokemonTeam, idCapture : docs.pokemonCapture  })
            }
        });

    } else {
        console.log('error')
    }
})

//remove capture
app.put('/pokemon/list/removeCapture', (req, res) => {
    mongoose.models = {}

    if (mongoose.connection.readyState === 1) {

        //schema des fields
        const schema = new mongoose.Schema({ email: 'string', name: 'string', password: 'string', pokemonTeam: { 'id': [] }, pokemonCapture: {'id' : []} });
        // selection des du models et fields
        const Users = mongoose.model('Users', schema);

        // find email si pas dans la base de données
        Users.findOne({ email: req.body.email }).exec((err, docs) => {
            if (docs == null) {
                console.log(docs);
                console.log(req.body.pokemonCapture.id)
                console.log('vide');
                res.send({ message: 'error' })
            }
            else {
                console.log(req.body.pokemonCapture.id)
                console.log(docs);
                docs.pokemonCapture.id = req.body.pokemonCapture.id
                docs.save();

                console.log('exitant');
                res.send({ id : docs.pokemonCapture.id })
            }
        });

    } else {
        console.log('error')
    }
})

//add capture
app.put('/pokemon/list/addCapture', (req, res) => {
    mongoose.models = {}

    if (mongoose.connection.readyState === 1) {

        //schema des fields
        const schema = new mongoose.Schema({ email: 'string', name: 'string', password: 'string', pokemonTeam: { "id": [] }, pokemonCapture: {'id' : []} });
        // selection des du models et fields
        const Users = mongoose.model('Users', schema);

        // find email si pas dans la base de données
        Users.findOne({ email: req.body.email }).exec((err, docs) => {
            if (docs == null) {
                console.log(docs);
                console.log(req.body.pokemonCapture.id)
                console.log('vide');
                res.send({ message: 'error' })
            }
            else {
                console.log(req.body.pokemonCapture.id)
                console.log(docs);
                docs.pokemonCapture.id = req.body.pokemonCapture.id
                docs.save();

                console.log('exitant');
                res.send({ id : docs.pokemonCapture.id })
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