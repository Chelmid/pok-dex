const mongoose = require('mongoose');

// server
mongoConnectionString = "mongodb+srv://root:root@cluster1.s0peq.mongodb.net/test"
//promise de la connection
const connect = mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true}) .then(() => console.log("MongoDB Connected ..."))
.catch((err) => console.log(err));

module.exports = connect