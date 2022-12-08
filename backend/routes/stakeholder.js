const auth = require('../middleware/auth');
const manager = require('../middleware/manager');
const { User, validateUser } = require('../models/user');
const { Project } = require('../models/project');
const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const Fawn = require('fawn');
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

        if (!project) return res.status(400).send("Not access to add in this project");

        const { error } = validateUser(_.pick(req.body, ['name', 'email', 'password']));
        if (error) return res.status(400).send(error.details[0].message);

        // findOne = looking for one of property
        const user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send('User already registered.');

        req.body.role = "stakeholder";
        const stakeholder = new User(_.pick(req.body, ['name', 'email', 'password', 'role']));
        const salt = await bcrypt.genSalt(10);
        stakeholder.password = await bcrypt.hash(stakeholder.password, salt);


        //  NOW ADD STAKEHOLDER INTO PROJECTS 
        try { 
            new Fawn.Task()
                .save('users', stakeholder) 
                .update('projects', { _id: req.body.projectId }, { stakeholders: {  _id: stakeholder._id } }) 
                .run()
                .then(function (results) {
                    //task is complete 
                    console.log(results);
                })
                .catch(function (err) {
                    console.log(err);
                });

            res.status(200).send({ name: user.name, message: "Successfully added as a stakeholder." });

        } finally {
            next();
        }

    } catch (error) {
        next();
    }

});

// DELETE | ONLY STAKEHOLDER CAN DELETE | 2 MIDDLWARE { AUTH , MANAGER } | ID OF STAKEHOLDER FOR DELETION 
router.delete('/:id', [auth,manager], (req,res,next)=>{
    res.status(200).send("Not implemented");
})

module.exports = router;