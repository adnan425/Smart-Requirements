const mongoose = require('mongoose'); 
const winston = require('winston'); 
const Fawn = require('fawn');
const dbUrl = "mongodb://localhost/smartrequirements"; 
Fawn.init(dbUrl);
module.exports = function(){
    mongoose.connect(dbUrl,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => winston.info("Connected to Monogdb..."));
}
