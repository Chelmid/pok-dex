const mongoose = require('mongoose');

// server
mongoConnectionString = ""

//promise de la connection
const connect = mongoose.connect(mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected ..."))
    .catch((err) => console.log(err));

module.exports = connect
