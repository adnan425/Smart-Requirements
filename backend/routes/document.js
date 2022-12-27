const express = require('express');
// const Joi = require('joi'); 
const _ = require('lodash');
const auth = require('../middleware/auth');
const manager = require('../middleware/manager');
// const admin = require('../middleware/admin');
const { introductionValidation, Introduction } = require('../models/introduction');
const { Description, descriptionValidation } = require('./../models/description');
const { Project } = require('../models/project');
const router = express.Router();

// POST | ADD PROJECT INTRO | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.post('/intro', [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { "userId": req.user._id, ...req.body };
        const intro = _.pick(bodyData, ['userId', 'projectId', 'purpose', 'conventions', 'audience', 'scope', 'references']);
        const { error } = introductionValidation(intro);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isManager = await Project.findOne({ _id: req.body.projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        let introduction = new Introduction(intro);
        await introduction.save();
        res.status(200).send(introduction);


    } catch (err) {
        next();
    }
});
// PUT | UPDATE PROJECT INTRO | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.put('/intro', [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { "userId": req.user._id, ...req.body };
        const intro = _.pick(bodyData, ['userId', 'projectId', 'purpose', 'conventions', 'audience', 'scope', 'references']);
        const { error } = introductionValidation(intro);
        if (error) return res.status(400).send(error.details[0].message);

        const isHas = await Introduction.findById(req.body._id);
        if (!isHas) return res.status(400).send('Record not found.');

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isManager = await Project.findOne({ _id: req.body.projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        await Introduction.findByIdAndUpdate(req.body._id,
            {
                // $set: intro
                // $set: {
                "userId": req.body.userId,
                "projectId": req.body.projectId,
                "purpose": req.body.purpose,
                "conventions": req.body.conventions,
                "audience": req.body.audience,
                "references": req.body.references,
                // }
            },
            function (err, result) {
                if (err) {
                    console.log('Error updating user: ' + err);
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    console.log('' + result + ' document(s) updated');
                    // res.status(200).send(result);

                }
                // res.status(200).send("Successfully Updated.");

            });
        res.status(200).send("Successfully Updated.");


    } catch (err) {
        console.log(err);
        next();
    }
});
// PUT | GET PROJECT INTRO | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.get('/intro/:id', [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
         const isUnique = await Project.findById(projectId);
         if (!isUnique) return res.status(400).send('Project not found.');

        const isHas = await Introduction.findOne({projectId});
        if (!isHas) return res.status(400).send('Record not found.');

        const isManager = await Project.findOne({ _id: projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        const intro = await Introduction.findById(isHas._id)
        res.status(200).send(intro);


    } catch (err) {
        console.log(err);
        next();
    }
});

//  -----------  CHAPTER 2 : Overall Description --------------

// POST | ADD PROJECT DESC | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.post('/desc', [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { "userId": req.user._id, ...req.body };
        const desc = _.pick(bodyData, ['userId', 'projectId', 'perspective', 'characteristics', 'envirnoment', 'implementation', 'documentation', 'assumptions']);
        const { error } = descriptionValidation(desc);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isManager = await Project.findOne({ _id: req.body.projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        let description = new Description(desc);
        await description.save();
        res.status(200).send(description);


    } catch (err) {
        next();
    }
});
// PUT | GET PROJECT DESC | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.get('/desc/:id', [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
         const isUnique = await Project.findById(projectId);
         if (!isUnique) return res.status(400).send('Project not found.');

        const isHas = await Description.findOne({projectId});
        if (!isHas) return res.status(400).send('Record not found.');

        const isManager = await Project.findOne({ _id: projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        const desc = await Description.findById(isHas._id)
        res.status(200).send(desc);


    } catch (err) {
        console.log(err);
        next();
    }
});
// PUT | UPDATE PROJECT DESC | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.put('/desc', [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { "userId": req.user._id, ...req.body };
        const desc = _.pick(bodyData, ['userId', 'projectId', 'perspective', 'characteristics', 'envirnoment', 'implementation', 'documentation', 'assumptions']);
        const { error } = descriptionValidation(desc);
        if (error) return res.status(400).send(error.details[0].message);

        const isHas = await Description.findById(req.body._id);
        if (!isHas) return res.status(400).send('Record not found.');

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isManager = await Project.findOne({ _id: req.body.projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        await Description.findByIdAndUpdate(req.body._id,
            {
                // $set: intro
                // $set: {
                "userId": req.body.userId,
                "projectId": req.body.projectId,
                "perspective": req.body.perspective,
                "characteristics": req.body.characteristics,
                "implementation": req.body.implementation,
                "documentation": req.body.documentation,
                "assumptions": req.body.assumptions,
                // }
            },
            function (err, result) {
                if (err) {
                    console.log('Error updating user: ' + err);
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    console.log('' + result + ' document(s) updated');
                    // res.status(200).send(result);

                }
                res.status(200).send("Successfully Updated.");

            });
        res.status(200).send("Successfully Updated.");


    } catch (err) {
        console.log(err);
        next();
    }
});
module.exports = router;
