const Joi = require('joi');
const mongoose = require('mongoose');

const phasesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'  
    },
    phaseId: {
        type: String,
        minLength: 3,
        maxLength: 500, 
    },
    phase: {
        type: String,
        minLength: 3,
        maxLength: 500,
        trim: true,
    },
    status:{
        type: String,
        enum: ['start', 'completed', 'pending'],
        default: 'pending'
    },
    updateAt: {
        type: Date, default: Date.now
    },
    date: {
        type: Date, default: Date.now
    }
});

function phasesValidation(phase){
    const schema = Joi.object({
        userId:  Joi.objectId().required(),
        projectId: Joi.objectId().required(),
        phaseId: Joi.string().min(10).max(30).required(),
        phase: Joi.string().min(3).max(500).required(),
        status: Joi.string().valid('start', 'completed', 'pending').required()
    });
    return schema.validate(phase);
}
const Phases = mongoose.model('Phases', phasesSchema);
exports.phasesValidation = phasesValidation;
exports.phasesSchema = phasesSchema;
exports.Phases = Phases;