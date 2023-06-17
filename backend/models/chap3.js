const Joi = require('joi');
const mongoose = require('mongoose');

const chap3Schema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    requ: {
        type: String,
        maxLength: 3000,
        default: " ",
    },
    requReview: {
        type: String,
        maxLength: 3000,
        default: " ",
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

function chap3Validation(intro) {
    const schema = Joi.object({
        userId: Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        requi: Joi.string().min(5).max(3000).required()
    });
    return schema.validate(intro);
}
function chap3ValidationReview(intro) {
    const schema = Joi.object({
        userId: Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        requReview: Joi.string().max(3000).required()
    });
    return schema.validate(intro);
}

const Chapt3 = mongoose.model('Chapt3', chap3Schema);
exports.chap3Validation = chap3Validation;
exports.chap3ValidationReview = chap3ValidationReview;
exports.chap3Schema = chap3Schema;
exports.Chapt3 = Chapt3;