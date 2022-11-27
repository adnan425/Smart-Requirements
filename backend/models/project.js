const Joi = require("joi");
const mongoose = require("mongoose");
const { userSchema } = require('./user');

const projectSchema = new mongoose.Schema({
    manager: {
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minLength: 5,
                maxLength: 50,
            },
        }),
        ref: 'users' // referencing users tables for get other details
    },
    stakeholders: [{
        type: new mongoose.Schema({
            name: {
                type: String,
                required: true,
                minLength: 5,
                maxLength: 50,
            },
        }),
        ref: 'users' // referencing users tables for get other details
    }],
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true,
        unique: true
    },
    isCompleted: {
        type: Boolean, default: false
    },
    date: {
        type: Date, default: Date.now
    }
});

function validateProject(project) {
    const schema = Joi.object({
        managerId: Joi.objectId().required(),
        title: Joi.string().min(3).max(255).required()
    });
    return schema.validate(project);

}

const Project = mongoose.model('Project', projectSchema);

exports.projectSchema = projectSchema;
exports.validateProject = validateProject;
exports.Project = Project;