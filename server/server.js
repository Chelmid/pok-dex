const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
var router = express.Router();
// require pour la connexion
const connect = require('./ConnectDatabase')
const mongoose = require('mongoose');
const axios = require('axios')
const path = require("path");

//use express
//app.use('/', express.static(__dirname + 'client/build'));
//app.use('client/public', express.static(path.join(__dirname, '/')));
app.use(express.json())
app.use(express.static('client/build'))
app.use('*', express.static('client/build'))

// CORS permission
router.use(function timeLog(req, res, next) {
    //autorisation pour le front a acceder au données
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    next();
});

//home
app.get("/", (req, res) => { 
    res.send(path.join(__dirname, '../client/public', 'index.html'))
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
                //console.log('error')
                res.redirect('/login/error');
            } else {
                //console.log('success')
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

                res.redirect('/register/success');
            }
            else {

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

                res.send({ message: 'error' })
            }
            else {
                //save element
                docs.pokemonTeam.id = req.body.pokemonTeams.id
                docs.save();

                 //response data
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
                res.send({ message: 'error' })
            }
            else {
                //save element
                docs.pokemonTeam.id = req.body.pokemonTeams.id
                docs.save();

                 //response data
                res.send({ id : docs.pokemonTeam.id })
            }
        });

    } else {
        console.log('error')
    }
})

/*app.get('/pokemon/list', (req, res) => {
    res.send('error')
})*/

//load
app.post('/pokemon/list/onload', (req, res) => {
    mongoose.models = {}

    if (mongoose.connection.readyState === 1) {

        //schema des fields
        const schema = new mongoose.Schema({ email: 'string', name: 'string', password: 'string', pokemonTeam: { "id": [] }, pokemonCapture: {'id' : []} });
        // selection des du models et fields
        const Users = mongoose.model('Users', schema);

        // find email si pas dans la base de données
        Users.findOne({ email: req.body.email }).exec((err, docs) => {
            if (docs == null) {
                res.send({ message: 'error' })
            }
            else {
                //response data
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

                res.send({ message: 'error' })
            }
            else {
                //save element
                docs.pokemonCapture.id = req.body.pokemonCapture.id
                docs.save();

                 //response data
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
                res.send({ message: 'error' })
            }
            else {
                //save element
                docs.pokemonCapture.id = req.body.pokemonCapture.id
                docs.save();

                 //response data
                res.send({ id : docs.pokemonCapture.id })
            }
        });

    } else {
        console.log('error')
    }
})


/*app.get("*", (req, res) => { 
    res.redirect("/");
});*/

//connection du serveur dnas le port 4000
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})