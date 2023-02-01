const Joi = require('joi');
const  mongoose = require('mongoose'); 
const requirementSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' // referencing users tables for get other details
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects' // referencing requirements tables for get other details
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
        maxLength: 500,
        trim: true, 
    },
    type:{
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


function validateRequirement(requirement){
    const schema = Joi.object({
        projectId: Joi.objectId().required(),
        title: Joi.string().min(5).max(50).required(),
        description: Joi.string().min(3).max(500).required(),
        type: Joi.string().min(10).max(30).required()
    });
    return schema.validate(requirement);
}



const Requirement = mongoose.model('requirements',requirementSchema);

exports.requirementSchema = requirementSchema;
exports.Requirement = Requirement;
exports.validateRequirement = validateRequirement;