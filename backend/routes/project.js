const express = require('express');
const _ = require('lodash');
const auth = require('../middleware/auth');
const manager = require('../middleware/manager');
const admin = require('../middleware/admin');
const { validateProject, Project } = require('../models/project');
const { User } = require('../models/user');
const router = express.Router();

// POST | ADD PROJECT | TITLE | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.post('/', [auth, manager ], async (req, res, next) => {
    try {
        const managetId = req.user._id;
        if (!managetId) return res.status(400).send("Invalid Manager Id!");

        // findOne = looking for one of property
        const isUnique = await Project.findOne({ title: req.body.title });
        if (isUnique) return res.status(400).send('Enter unique name of project.');

        const projectObj = {
            "managerId": managetId,
            "title": req.body.title,
            "description": req.body.description
        };
        // validating all req body data
        const { error } = validateProject(projectObj);
        if (error) return res.status(400).send(error.details[0].message);

        // checking the user id is exist or not
        const manager = await User.findById(managetId);
        if (!manager) return res.status(400).send("Invalid Manager Id!");


        let project = new Project({
            title: req.body.title,
            description: req.body.description,
            manager: manager._id, 
            status: "started"
        });
        

        await project.save();
        res.status(200).send(project);
        res.status(200).send("Successfully created your project.");

    } catch (err) {
        next();
        // res.status(500).send("Internal server error.");
    }
});

//  GET | All Projects | TWO MIDDLWARE { AUTH, ADMIN } | ONLY ADMIN | USE ADMIN MIDDLEWARE FOR VERIFY 
router.get('/', [auth,admin] , async (req, res, next) => {
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
        const projects = await Project.find({_id : req.user._id}).select('id title status date');
        return res.status(200).send(projects);
    } catch (err) {
        next();
    }

});


module.exports = router;