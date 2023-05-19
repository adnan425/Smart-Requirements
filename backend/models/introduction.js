const Joi = require('joi');
const mongoose = require('mongoose');

const introductionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    purpose: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    purposeReview: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    conventions: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    conventionsReview: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    audience: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    audienceReview: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    scope: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    scopeReview: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    references: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    referencesReview: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
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

function introductionValidation(intro) {
    const schema = Joi.object({
        userId: Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        purpose: Joi.string().min(5).max(3000).required(),
        conventions: Joi.string().min(5).max(3000).required(),
        audience: Joi.string().min(5).max(3000).required(),
        scope: Joi.string().min(5).max(3000).required(),
        references: Joi.string().min(5).max(3000).required(),
    });
    return schema.validate(intro);
}
function introductionValidationReview(intro) {
    const schema = Joi.object({
        userId: Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        purposeReview: Joi.string().min(5).max(3000).required(),
        conventionsReview: Joi.string().min(5).max(3000).required(),
        audienceReview: Joi.string().min(5).max(3000).required(),
        scopeReview: Joi.string().min(5).max(3000).required(),
        referencesReview: Joi.string().min(5).max(3000).required(),
    });
    return schema.validate(intro);
}
const Introduction = mongoose.model('Introduction', introductionSchema);
exports.introductionValidation = introductionValidation;
exports.introductionValidationReview = introductionValidationReview;
exports.introductionSchema = introductionSchema;
exports.Introduction = Introduction;