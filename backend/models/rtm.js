const Joi = require('joi');
const mongoose = require('mongoose');
const rtmSchema = new mongoose.Schema({
    featureId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'features'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' // referencing users tables for get other details
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects' // referencing requirements tables for get other details
    },
    //a persone(stakeholder) who  enter the requirement 
    urId: {
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true,

    },
    // req Id
    srId: {
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true,

    },
    requirement: {
        type: String,
        minLength: 5,
        maxLength: 300,
        required: true,
        trim: true

    },
    date: {
        type: Date,
        default: Date.now
    }
});


function validateRTM(requirement) {
    const schema = Joi.object({
        featureId: Joi.objectId().required(),
        userId: Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        urId: Joi.objectId().required(),
        srId: Joi.objectId().required(),
        requirement: Joi.string().min(5).max(300).required(),
    });
    return schema.validate(requirement);
}



const RTM = mongoose.model('rtm', rtmSchema);

exports.rtmSchema = rtmSchema;
exports.RTM = RTM;
exports.validateRTM = validateRTM;