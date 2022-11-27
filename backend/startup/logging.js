const winston  = require('winston');
require('winston-mongodb');
module.exports = function(){

    winston.handleExceptions(
        new winston.transports.Console({colorize: true, prettyPrint: true}),
        new winston.transports.File({file: 'unhandleExceptions.log'})
    );

    process.on('unhandleRejection',(ex)=>{
        throw ex;
    });
    
    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
    winston.add(new winston.transports.MongoDB({db: 'mongodb://localhost/smartrequirements', level: 'error'}));
}