const express = require('express');
const Joi = require('joi');
const auth = require('../middleware/auth');
const manager = require('../middleware/manager');
const stakeholder = require('../middleware/stakeholder');
const admin = require('../middleware/admin');
const { validateProject, Project } = require('../models/project');
const { User } = require('../models/user');
const {
    Introduction,
} = require("../models/introduction");
const {
    Description,
} = require("./../models/description");
const {
    NonFunctional,
} = require("./../models/nonfunctional");
const { Features } = require("./../models/features");
const {
    OtherRequirements,
} = require("./../models/OtherRequirements");
const router = express.Router(); 

// POST | ADD PROJECT | TITLE | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.post('/', [auth, manager], async (req, res, next) => {
    try {
        const managerId = req.user._id;
        if (!managerId) return res.status(400).send("Invalid Manager Id!");

        // findOne = looking for one of property
        const isUnique = await Project.findOne({ title: req.body.title });
        if (isUnique) return res.status(400).send('Enter unique name of project.');

        const projectObj = {
            "managerId": req.user._id,
            "title": req.body.title,
            "description": req.body.description
        };
        // validating all req body data
        const { error } = validateProject(projectObj);
        if (error) return res.status(400).send(error.details[0].message);

        // checking the user id is exist or not
        const manager = await User.findById(req.user._id);
        if (!manager) return res.status(400).send("Invalid Manager Id!");


        let project = new Project({
            title: req.body.title,
            manager: manager._id,
            stakeholders: [],
            description: req.body.description,
            status: "started"
        });

        

        await project.save();
        res.status(200).send(project);

    } catch (err) {
        next();
    }
});
//  GET | All Projects | TWO MIDDLWARE { AUTH, ADMIN } | ONLY ADMIN | USE ADMIN MIDDLEWARE FOR VERIFY 
router.get('/', [auth, admin], async (req, res, next) => {
    try {
        const projects = await Project.find().select('id title status date description');
        return res.status(200).send(projects);
    } catch (err) {
        next();
    }
});
//  GET | MY Projects | ONLY MANAGER | USE MANAGER MIDDLEWARE FOR VERIFY 
router.get('/me', [auth, manager], async (req, res, next) => {
    try {
        // const projects = await Project.find({manager : req.user._id}).select('id title status date description date');
        const projects = await Project.find({ manager: req.user._id }).select('-manager');
        return res.status(200).send(projects);
    } catch (err) {
        next();
    }

});
//  GET | MY Projects | ONLY MANAGER | USE MANAGER MIDDLEWARE FOR VERIFY 
router.get('/stakeholder', [auth, stakeholder], async (req, res, next) => {
    try {
        // const projects = await Project.find({manager : req.user._id}).select('id title status date description date');
        const projects = await Project.find({ stakeholders: req.user._id }).select('-manager');
        return res.status(200).send(projects);
    } catch (err) {
        next();
    }

});
//  GET | Projects BY ID | ONLY MANAGER | USE MANAGER MIDDLEWARE FOR VERIFY 
router.get('/:id', [auth], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        if (!Joi.objectId(projectId)) return res.status(400).send("Invalid Project Id!");

        var project = await Project.findById(projectId);
        if (!project) return res.status(404).send("Project not found by this id.");
        const array = project.stakeholders;

        let pro = [];
        let promises = [];

        array.forEach(async (element) => {
            promises.push(User.findById(element).select('name email date'));
        });
        pro = await Promise.all(promises);
        var p = project.toObject();
        p = { ...p, "stakeholdersDetails": pro };
        return res.status(200).send(p);

    } catch (err) {
        next();
    }

});
//  DELETE | DELETE Project BY ID | ONLY MANAGER | USE MANAGER MIDDLEWARE FOR VERIFY 
router.delete('/:id', [auth], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        if (!Joi.objectId(projectId)) return res.status(400).send("Invalid Project Id!");

        var project = await Project.findById(projectId);
        if (!project) return res.status(404).send("Project not found by this id.");

        if (project.manager === req.user._id) {
            return res.status(403).send("Access denied.");
        }

        const query = { projectId: projectId };
        
        // Define the names of the collections to delete documents from
        const collections = ['introduction', 'description', 'features', 'nonFunctional', 'otherRequirements', 'project'];
        // Delete documents from each collection using the projectId as the criteria
      
        const result = await Project.findByIdAndDelete(projectId);
        if(result){
            res.status(200).send("Successfully Deleted.");
        }else{
            res.status(400).send("Failed to Deleted.");
        }

    }
    catch (err) {
        console.log(err);
        next();
    }

});
//  PUT | Projects BY ID | ONLY MANAGER | USE MANAGER MIDDLEWARE FOR VERIFY | UPDATE TITLE PAGE 
router.put('/p/:id', [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        if (!Joi.objectId(projectId)) return res.status(400).send("Invalid Project Id!");
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(404).send('Project not found.');

        // findOne = looking for one of property
        const isUniqueTitle = await Project.findOne({ _id: projectId }, { manager: req.user._id });
        if (!isUniqueTitle) return res.status(403).send('Access denied.');

        const projectObj = {
            "managerId": req.user._id,
            "title": req.body.title,
            "description": isUnique.description,
            'author': req.body.author,
            'organization': req.body.organization
        };
        // validating all req body data
        const { error } = validateProject(projectObj);
        if (error) return res.status(400).send(error.details[0].message);

        const project = await Project.findByIdAndUpdate(projectId, {
            // $set: {
            title: req.body.title || isUnique.title,
            author: req.body.author || isUnique.author,
            organization: req.body.organization || isUnique.organization
            // }
        },
            function (err, result) {
                if (err) {
                    console.log('Error updating user: ' + err);
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    console.log('' + result + ' document(s) updated');
                    res.send(project);
                }
            });

        return res.status(200).send(project);
    } catch (err) {
        console.log(err);
        next();
    }

});
//  GET | Project BY ID  | USE MANAGER MIDDLEWARE FOR VERIFY | UPDATE TITLE PAGE 
router.get('/p/:id', [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        if (!Joi.objectId(projectId)) return res.status(400).send("Invalid Project Id!");
        const isUnique = await Project.findById(projectId).select('title author organization date');
        if (!isUnique) return res.status(404).send('Project not found.');

        // findOne = looking for one of property
        const isUniqueTitle = await Project.findOne({ _id: projectId }, { manager: req.user._id });
        if (!isUniqueTitle) return res.status(403).send('Access denied.');

        return res.status(200).send(isUnique);
    } catch (err) {
        next();
    }

});

module.exports = router;