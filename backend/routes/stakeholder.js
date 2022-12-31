const auth = require('../middleware/auth');
const manager = require('../middleware/manager');
const stakeholder = require('./../middleware/stakeholder')
const { User, validateUser } = require('../models/user');
const { Project } = require('../models/project');
const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const router = express.Router();

//  POST | Add stakeholder | ProjectID | User details | Only Manager Can add | manager middleware for verify 
router.post('/', [auth, manager], async (req, res, next) => {
    try {
        // PROJECT ID IN WHICH STAKEHOLDER ADD
        // STORE NEW USER AND GET ID FROM THERE
        // AND NEW ID STORE IN THE EXISTING PROJECTS | STAKEHOLDERS 

        if (!Joi.objectId(req.body.projectId)) return res.status(400).send("Invalid Project Id!");

        // const project = await Project.findById(req.body.projectId);

        const project = await Project.find({ $and: [{ "manager._id": { $eq: req.user._id } }, { "_id": { $eq: req.body.projectId } }] });
        if (!project) return res.status(403).send("Not access to add in this project");

        const { error } = validateUser(_.pick(req.body, ['name', 'email', 'password']));
        if (error) return res.status(400).send(error.details[0].message);

        // findOne = looking for one of property
        const user = await User.findOne({ email: req.body.email });
        if (user) {

            const isAdded = await Project.findOne({_id: req.body.projectId}, {stakeholders:  user._id});
                // {$and : [{_id: req.body.projectId}, { stakeholders: { stakeholderId: user._id} }]});
            if (isAdded) {
                res.status(200).send("Stakeholder is already added.");
            } else {
                await Project.findByIdAndUpdate(
                    req.body.projectId,
                    { $push: { stakeholders:  isAdded._id } }
                )
                res.status(200).send("Successfully added as a stakeholder.");
            }
        } else {
            req.body.role = "stakeholder";
            const stakeholder = new User(_.pick(req.body, ['name', 'email', 'password', 'role']));
            const salt = await bcrypt.genSalt(10);
            stakeholder.password = await bcrypt.hash(stakeholder.password, salt);
            await stakeholder.save();

            await Project.findByIdAndUpdate(
                req.body.projectId,
                { $push: { stakeholders:  stakeholder._id } }
            )
            res.status(200).send("Successfully added as a stakeholder.");
        }
    } catch (error) {
        console.log(error);
        next();
    }

});

// GET | All Stakeholders By project ID | 2 MIDDLWARE { AUTH , MANAGER } | 
router.get('/:id', [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const project = await Project.find({_id: projectId })
                        .populate('users', 'name, email')
                        .select('name, users');
        // const stakeholders = project.stakeholders;
        res.status(200).send(project);
    } catch (error) {
        next();
    }
})
// DELETE | ONLY STAKEHOLDER MANAGER DELETE | 2 MIDDLWARE { AUTH , MANAGER } | ID OF STAKEHOLDER FOR DELETION 
router.delete('/:id', [auth, manager], async (req, res, next) => {
    try {
        const project = await Project.findById(req.body.projectId);
        const stakeholder = project.stakeholders.id(req.params.id);
        if(!stakeholder)  return res.status(200).send("Not found stakeholder.");
        
        stakeholder.remove();
        project.save();
        res.status(200).send("Successfully Deleted");
    } catch (error) {
        next();
    }
});

 


module.exports = router;