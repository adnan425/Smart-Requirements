const Joi = require('joi');
const mongoose = require('mongoose');

const otherReqSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'  
    }, 
    requirements: {
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

function otherReqValidation(intro){
    const schema = Joi.object({
        userId:  Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        requirements: Joi.string().min(5).max(3000).required() 
    });
    return schema.validate(intro);

}

const OtherRequirements = mongoose.model('OtherRequirements', otherReqSchema);
exports.otherReqValidation = otherReqValidation;
exports.otherReqSchema = otherReqSchema;
exports.OtherRequirements = OtherRequirements;