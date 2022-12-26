const express = require('express');
// const Joi = require('joi'); 
const auth = require('../middleware/auth');
const manager = require('../middleware/manager');
// const admin = require('../middleware/admin');
const { introductionValidation, Introduction } = require('../models/introduction');
const { Project } = require('../models/project');
const router = express.Router();

// POST | ADD PROJECT TITLE | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.post('/intro', [auth, manager], async (req, res, next) => {
    try {

        const intro = {"userId": req.user._id , ...req.body };
        const { error } = introductionValidation(intro);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isManager = await Project.findOne({ _id: req.body.projectId },{ manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        let introduction = new Introduction(intro);
        await introduction.save(); 
        res.status(200).send(introduction);

    } catch (err) {
        console.log(err);
        next();
    }
});

module.exports = router;
