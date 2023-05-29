const Joi = require('joi');
const mongoose = require('mongoose');

const featuresSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    title: {
        type: String,
        minLength: 3,
        maxLength: 300,
        trim: true,
    },
    features: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    }, featuresReview: {
        type: String,
        minLength: 3,
        maxLength: 3000,
        trim: true,
    },
    // req Id
    srId: {
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true,
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

function featuresValidation(feature) {
    const schema = Joi.object({
        userId: Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        title: Joi.string().min(5).max(300).required(), // feature 1, feature 2...
        srId: Joi.objectId().required(),
        features: Joi.string().min(5).max(3000).required()
    });
    return schema.validate(feature);

}

const Features = mongoose.model('Features', featuresSchema);
exports.featuresValidation = featuresValidation;
exports.featuresSchema = featuresSchema;
exports.Features = Features;