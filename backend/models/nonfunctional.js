const Joi = require('joi');
const mongoose = require('mongoose');

const nonfunctionalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'  
    },
    performance: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    safety: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    security:{
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    quality: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    business: {
        type: String,
        minLength: 3,
        maxLength: 3000,
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

function nonfunctionalValidation(nonFun){
    const schema = Joi.object({
        userId:  Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        performance: Joi.string().min(5).max(3000).required(),
        safety: Joi.string().min(5).max(3000).required(),
        security: Joi.string().min(5).max(3000).required(),
        quality: Joi.string().min(5).max(3000).required(),
        business: Joi.string().min(5).max(3000).required(),
    });
    return schema.validate(nonFun);

}

const NonFunctional = mongoose.model('NonFunctional', nonfunctionalSchema);
exports.nonfunctionalValidation = nonfunctionalValidation;
exports.nonfunctionalSchema = nonfunctionalSchema;
exports.NonFunctional = NonFunctional;