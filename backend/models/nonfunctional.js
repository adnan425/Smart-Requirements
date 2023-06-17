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
        maxLength: 3000,
        trim: true,
        default: ""

    },
    performanceReview: {
        type: String,
        maxLength: 3000,
        trim: true,
        default: ""

    },
    safety: {
        type: String,
        maxLength: 3000,
        trim: true,
        default: ""

    },
    safetyReview: {
        type: String,
        maxLength: 3000,
        trim: true,
        default: ""

    },
    security: {
        type: String,
        maxLength: 3000,
        trim: true,
        default: ""

    },
    securityReview: {
        type: String,
        maxLength: 3000,
        trim: true,
        default: ""

    },
    quality: {
        type: String,
        maxLength: 3000,
        trim: true,
        default: ""

    },
    qualityReview: {
        type: String,
        maxLength: 3000,
        trim: true,
        default: ""

    },
    business: {
        type: String,
        maxLength: 3000,
        trim: true,
        default: ""

    },
    businessReview: {
        type: String,
        maxLength: 3000,
        trim: true,
        default: ""
    },
    locked: {
        type: String,
        enum: ['locked', 'unlocked'],
        lowercase: true,
        default: 'unlocked'
    },
    date: {
        type: Date, default: Date.now
    }
});

function nonfunctionalValidation(nonFun) {
    const schema = Joi.object({
        userId: Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        performance: Joi.string().min(5).max(3000).required(),
        safety: Joi.string().min(5).max(3000).required(),
        security: Joi.string().min(5).max(3000).required(),
        quality: Joi.string().min(5).max(3000).required(),
        business: Joi.string().min(5).max(3000).required(),
    });
    return schema.validate(nonFun);

}
function nonfunctionalValidationReview(nonFun) {
    const schema = Joi.object({
        userId: Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        performanceReview: Joi.string().min(5).max(3000).required(),
        safetyReview: Joi.string().min(5).max(3000).required(),
        securityReview: Joi.string().min(5).max(3000).required(),
        qualityReview: Joi.string().min(5).max(3000).required(),
        businessReview: Joi.string().min(5).max(3000).required(),
    });
    return schema.validate(nonFun);

}
const NonFunctional = mongoose.model('NonFunctional', nonfunctionalSchema);
exports.nonfunctionalValidation = nonfunctionalValidation;
exports.nonfunctionalValidationReview = nonfunctionalValidationReview;
exports.nonfunctionalSchema = nonfunctionalSchema;
exports.NonFunctional = NonFunctional;