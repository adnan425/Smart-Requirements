const mongoose = require('mongoose');
const winston = require('winston');
const Fawn = require('fawn');
const dbUrl = "mongodb://0.0.0.0:27017/smartrequirements";
Fawn.init(dbUrl);


module.exports = function () {
    mongoose.connect(dbUrl).then(() => {
        console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });
}
