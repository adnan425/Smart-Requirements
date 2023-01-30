const mongoose = require('mongoose');
var imageSchema = new mongoose.Schema({  
    url: {
        type: String,
        minLength: 3,
        maxLength: 500, 
    },
    
}); 
module.exports = new mongoose.model('Images', imageSchema);