const Joi = require('joi');
const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'  
    },
    perspective: {
        type: String,
        minLength: 3,
        maxLength: 500,
        trim: true,
    },
    functions: {
        type: String,
        minLength: 3,
        maxLength: 500,
        trim: true,
    },
    characteristics:{
        type: String,
        minLength: 3,
        maxLength: 500,
        trim: true,
    },
    envirnoment: {
        type: String,
        minLength: 3,
        maxLength: 500,
        trim: true,
    },
    implementation: {
        type: String,
        minLength: 3,
        maxLength: 500,
        trim: true,
    },
    documentation: {
        type: String,
        minLength: 3,
        maxLength: 500,
        trim: true,
    },
    assumptions: {
        type: String,
        minLength: 3,
        maxLength: 500,
        trim: true,
    },
    locked: {
        type: String,
        enum: ['locked','unlocked'],
        lowercase: true,
         default: 'unlocked'
    },
    date: {
        type: Date, default: Date.now
    }
});

function descriptionValidation(intro){
    const schema = Joi.object({
        userId:  Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        perspective: Joi.string().min(5).max(500).required(),
        functions: Joi.string().min(5).max(500).required(),
        characteristics: Joi.string().min(5).max(500).required(),
        envirnoment: Joi.string().min(5).max(500).required(),
        implementation: Joi.string().min(5).max(500).required(),
        documentation: Joi.string().min(5).max(500).required(), 
        assumptions: Joi.string().min(5).max(500).required(), 
    });
    return schema.validate(intro);

}

const Description = mongoose.model('Description', descriptionSchema);
exports.descriptionValidation = descriptionValidation;
exports.descriptionSchema = descriptionSchema;
exports.Description = Description;