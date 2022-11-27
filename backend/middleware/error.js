const winston = require('winston');

module.exports = function(err , req,res,next){
    // log the executation
    winston.error(err.message, err);
    res.status(500).send("Internal server error.");
}