const Joi = require('joi');
const express = require('express');
const auth = require('./../middleware/auth');
const manager = require('./../middleware/manager');
const { Requirement, validateRequirement } = require('../models/requirement');
const { Project } = require('./../models/project');
const { User } = require('../models/user');

const router = express.Router();

// ADD REQ | USER ID FROM MIDDLWARE
router.post('/', [auth], async (req, res, next) => {
    try {
        const { error } = validateRequirement(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        //Check Project exist or not
        const isExist = await Project.findById(req.body.projectId);
        if (!isExist) return res.status(400).send("Project not found with this id.");

        // check is project id against the logged user
        // const isMember = await Project.findOne({ '_id': req.body.projectId, 'manager':req.user._id});
        // if(!isMember) return res.status(404).send("You dont have access.");

        const requirement = new Requirement({
            userId: req.user._id,
            projectId: req.body.projectId,
            title: req.body.title,
            description: req.body.description,
            type: req.body.type
        });
        const requ = await requirement.save();
        res.status(200).send(requ);
    } catch (error) {
        console.log(error);
        next();
    }
});

// GET REQ USING ID | USER ID FROM MIDDLWARE
router.get('/:id', [auth], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        if (!projectId) return res.status(400).send("Project Id not found.");
        if (!Joi.objectId(projectId)) return res.status(400).send("Invalid Project Id!");

        //Check Project exist or not
        const isExist = await Project.findById(projectId);
        if (!isExist) return res.status(400).send("Project not found with this id.");


        // check is project id against the logged user
        // const isMember = await Project.findOne({ '_id': projectId, 'manager':req.user._id});
        // const isStakeholder = await Project.findOne({ '_id': projectId, 'stakeholders':req.user._id});
        // if(!isMember || !isStakeholder) return res.status(404).send("You dont have access.");

        const requirements = await Requirement.find({ 'projectId': projectId }).select('-__v  -projectId');
        let promises = [];
        let pro = [];
        requirements.forEach(async (element) => {
            promises.push(User.findById(element.userId).select('name email date'));
        });
        pro = await Promise.all(promises);
        
        let p = {};
        requirements.forEach((element, index) => {
            p[index] = {...element._doc};
            pro.forEach(user => {
                if(user._id.toString() === element.userId.toString()) {
                    p[index].name = user.name;
                    p[index].email = user.email;
                }
            });
        }); 
        return res.status(200).send(Object.values(p));
        
        
    } catch (error) {
        console.log(error);
        next();
    }
});
module.exports = router;
