const  mongoose = require('mongoose'); 
const requirementSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' // referencing users tables for get other details
    },
    title:{
        type: String,
        minLength: 5,
        maxLength: 120,
        required: true,

    },
    description: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 255,
        trim: true, 
    },
    date: {
        type: Date,
        default: Date.now
    }
});





const Requirement = mongoose.model('requirements',requirementSchema);

exports.requirementSchema = requirementSchema;
exports.Requirement = Requirement;