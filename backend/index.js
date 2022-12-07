const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi);
const winston = require('winston');
const express = require('express');
const app = express(); 

require('./startup/logging');
require('./startup/cors')(app);
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/prod')(app);
 
const port = process.env.PORT || 3004;
app.listen(port, () => winston.info(`Listening to port ${port}...`));