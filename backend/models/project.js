const Joi = require("joi");
const mongoose = require("mongoose"); 

const projectSchema = new mongoose.Schema({
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users' // referencing users tables for get other details
    },
    stakeholders: [ {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users' 
    }],
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50,
        trim: true,
        unique: true
    },
    description:{
        type: String,
        minLength: 3,
        maxLength: 250,
        trim: true, 
    },
    author: {
        type: String,
        minLength: 3,
        maxLength: 150,
        trim: true,
        default: "Manager"
    },
    organization: {
        type: String,
        minLength: 3,
        maxLength: 200,
        trim: true,
        default: "SZABIST"

    },
    status: {
        type: String,
        enum: ['started','pending','completed'],
        lowercase: true,
         default: 'started'
    },
    date: {
        type: Date, default: Date.now
    }
});

function validateProject(project) {
    const schema = Joi.object({
        managerId: Joi.objectId().required(),
        title: Joi.string().min(3).max(255).required(),
        description: Joi.string().min(3).max(255).required()
    });
    return schema.validate(project);

}

const Project = mongoose.model('Project', projectSchema);

exports.projectSchema = projectSchema;
exports.validateProject = validateProject;
exports.Project = Project;