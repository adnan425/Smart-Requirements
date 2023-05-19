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
        maxLength: 2000,
        trim: true,
    },
    perspectiveReview: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    functions: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    functionsReview: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    characteristics: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    characteristicsReview: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    envirnoment: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    envirnomentReview: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    implementation: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    implementationReview: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    documentation: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    documentationReview: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    assumptions: {
        type: String,
        minLength: 3,
        maxLength: 2000,
        trim: true,
    },
    assumptionsReview: {
        type: String,
        minLength: 3,
        maxLength: 2000,
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

function descriptionValidation(intro) {
    const schema = Joi.object({
        userId: Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        perspective: Joi.string().min(5).max(2000).required(),
        functions: Joi.string().min(5).max(2000).required(),
        characteristics: Joi.string().min(5).max(2000).required(),
        envirnoment: Joi.string().min(5).max(2000).required(),
        implementation: Joi.string().min(5).max(2000).required(),
        documentation: Joi.string().min(5).max(2000).required(),
        assumptions: Joi.string().min(5).max(2000).required(),
    });
    return schema.validate(intro);
}
function descriptionValidationReview(intro) {
    const schema = Joi.object({
        userId: Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        perspectiveReview: Joi.string().min(5).max(2000).required(),
        functionsReview: Joi.string().min(5).max(2000).required(),
        characteristicsReview: Joi.string().min(5).max(2000).required(),
        envirnomentReview: Joi.string().min(5).max(2000).required(),
        implementationReview: Joi.string().min(5).max(2000).required(),
        documentationReview: Joi.string().min(5).max(2000).required(),
        assumptionsReview: Joi.string().min(5).max(2000).required(),
    });
    return schema.validate(intro);

}

const Description = mongoose.model('Description', descriptionSchema);
exports.descriptionValidation = descriptionValidation;
exports.descriptionValidationReview = descriptionValidationReview;
exports.descriptionSchema = descriptionSchema;
exports.Description = Description;