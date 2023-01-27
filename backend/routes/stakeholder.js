const auth = require('../middleware/auth');
const sendEmail = require('./sendemail');
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
            const isAdded = await Project.findOne({ _id: req.body.projectId, stakeholders: { $in: [user._id] } });
            if (isAdded) {
                res.status(400).send("Stakeholder is already added.");
            } else {
                const proj = await Project.findByIdAndUpdate(req.body.projectId, { $push: { stakeholders: user._id } })
                sendEmail(proj.title, stakeholder.name, stakeholder.email, "You can login with your old password");
                res.status(200).send("Successfully added as a stakeholder.");
            }
        } else {
            req.body.role = "stakeholder";
            const stakeholder = new User(_.pick(req.body, ['name', 'email', 'password', 'role']));
            const salt = await bcrypt.genSalt(10);
            stakeholder.password = await bcrypt.hash(stakeholder.password, salt);
            await stakeholder.save();
            const proj = await Project.findByIdAndUpdate(
                req.body.projectId,
                { $push: { stakeholders: stakeholder._id } }
            )
            sendEmail(proj.title, stakeholder.name, stakeholder.email, req.body.password);
            res.status(200).send("Successfully added as a stakeholder.");
        }
    } catch (error) {
        console.log(error);
        next();
    }

});
//  POST | Delete stakeholder | ProjectID, STAKEHOLDER ID |  | Only Manager Can add | manager middleware for verify 
router.delete('/', [auth, manager], async (req, res, next) => {
    try {
        // PROJECT ID IN WHICH STAKEHOLDER ADD  
        const userId = req.body.userId; 
        const projectId = req.body.projectId;

        if (!userId) return res.status(400).send("User Id required!");
        if (!projectId) return res.status(400).send("Project Id required!");

        if (!Joi.objectId(projectId)) return res.status(400).send("Invalid Project Id!");

        const project = await Project.find({ $and: [{ "manager._id": { $eq: req.user._id } }, { "_id": { $eq: projectId } }] });
        if (!project) return res.status(403).send("Not access to delete.");

        const isAdded = await Project.findOne({ _id: req.body.projectId, stakeholders: { $in: [userId] } });
        if (!isAdded) {
            res.status(403).send("Stakeholder Not Found.");
        } else {
            const proj = await Project.findByIdAndUpdate(req.body.projectId, { $pull: { stakeholders: userId } })
            res.status(200).send("Successfully Deleted.");
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
        const project = await Project.find({ _id: projectId })
            // .select('stakeholders')
            .populate({
                path: 'users',
                // Get friends of friends - populate the 'friends' array for every friend
                populate: { path: 'users' }
            }).exec(function (err, f) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(f);
                }
            })
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
        if (!stakeholder) return res.status(200).send("Not found stakeholder.");

        stakeholder.remove();
        project.save();
        res.status(200).send("Successfully Deleted");
    } catch (error) {
        next();
    }
});




module.exports = router;