const express = require("express");
// const Joi = require('joi');
const _ = require("lodash");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const auth = require("../middleware/auth");
const manager = require("../middleware/manager");
const { exec } = require('child_process');
const { convertText } = require('html-to-latex');
const mongoose = require('mongoose')

const { validateProject, Project } = require("../models/project");
const { chap3ValidationReview, Chapt3, chap3Validation } = require("../models/chap3");
const { Requirement } = require('../models/requirement');
const { RTM } = require('../models/rtm');
const {
    introductionValidation,
    introductionValidationReview,
    Introduction,
} = require("../models/introduction");
const {
    Description,
    descriptionValidation,
    descriptionValidationReview,
} = require("./../models/description");
const {
    NonFunctional,
    nonfunctionalValidation,
    nonfunctionalValidationReview,
} = require("./../models/nonfunctional");
const { Features, featuresValidation } = require("./../models/features");
const {
    OtherRequirements,
    otherReqValidationReview,
    otherReqValidation,
} = require("./../models/OtherRequirements");
var imageModel = require("./../models/images");
const router = express.Router();

//  -----------  CHAPTER 0 : TITLE --------------
// POST | ADD PROJECT TITLE | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.post("/title", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = {
            managerId: req.user._id,
            ...req.body,
            description: "tesitng",
        };
        const title = _.pick(bodyData, [
            "managerId",
            "projectId",
            "title",
            "author",
            "organization",
            "description",
        ]);
        const { error } = validateProject(
            _.pick(title, ["managerId", "title", "description"])
        );
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne(
            { _id: req.body.projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const isUpdate = await Project.find({ projectId: req.body.projectId });
        if (isUpdate[0]) {
            const updateId = isUpdate[0]._id;
            console.log("update");
            let update = await Project.findOneAndUpdate(
                { _id: updateId },
                {
                    $set: {
                        title: req.body.title || isUnique.title,
                        author: req.body.author || isUnique.author,
                        organization: req.body.organization || isUnique.organization,
                    },
                }
            );
            res.status(200).send(update);
        } else {
            let titlee = new Project(title);
            await titlee.save();
            res.status(200).send(titlee);
        }
    } catch (err) {
        next();
    }
});
//  -----------  CHAPTER 1 : INTRO --------------
// POST | ADD PROJECT INTRO | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.post("/intro", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const intro = _.pick(bodyData, [
            "userId",
            "projectId",
            "purpose",
            "conventions",
            "audience",
            "scope",
            "references",
        ]);
        const { error } = introductionValidation(intro);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne(
            { _id: req.body.projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const isUpdate = await Introduction.findOne({ projectId: req.body.projectId });
        console.log(isUpdate);

        if (isUpdate) {
            isUpdate.userId = req.user._id;
            isUpdate.purpose = req.body.purpose;
            isUpdate.conventions = req.body.conventions;
            isUpdate.audience = req.body.audience;
            isUpdate.scope = req.body.scope;
            isUpdate.references = req.body.references;

            const updatedIntroduction = await isUpdate.save();
            res.status(200).send(updatedIntroduction);
        } else {
            let introduction = new Introduction(intro);
            await introduction.save();
            res.status(200).send(introduction);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});

router.post("/introreview", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const intro = _.pick(bodyData, [
            "userId",
            "projectId",
            "purposeReview",
            "conventionsReview",
            "audienceReview",
            "scopeReview",
            "referencesReview",
        ]);
        const { error } = introductionValidationReview(intro);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne(
            { _id: req.body.projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const isUpdate = await Introduction.find({ projectId: req.body.projectId });
        if (isUpdate[0]) {
            const updateId = isUpdate[0]._id;
            console.log("update");
            let update = await Introduction.findOneAndUpdate(
                { _id: updateId },
                {
                    $set: {
                        userId: req.user._id,
                        projectId: req.body.projectId,
                        purposeReview: req.body.purposeReview,
                        conventionsReview: req.body.conventionsReview,
                        audienceReview: req.body.audienceReview,
                        scopeReview: req.body.scopeReview,
                        referencesReview: req.body.referencesReview,
                    },
                }
            );
            res.status(200).send(update);
        } else {
            let introduction = new Introduction(intro);
            await introduction.save();
            res.status(200).send(introduction);
        }
    } catch (err) {
        next();
    }
});
// PUT | GET PROJECT INTRO | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.get("/intro/:id", [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isHas = await Introduction.findOne({ projectId });
        if (!isHas) return res.status(400).send("Record not found.");

        const isManager = await Project.findOne(
            { _id: projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const intro = await Introduction.findById(isHas._id);
        res.status(200).send(intro);
    } catch (err) {
        console.log(err);
        next();
    }
});
//  -----------  CHAPTER 2 : Overall Description --------------
// POST | ADD PROJECT DESCRIPTION | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.post("/desc", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const desc = _.pick(bodyData, [
            "userId",
            "projectId",
            "perspective",
            "functions",
            "characteristics",
            "envirnoment",
            "implementation",
            "documentation",
            "assumptions",
        ]);
        const { error } = descriptionValidation(desc);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne(
            { _id: req.body.projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const isUpdate = await Description.findOne({ projectId: req.body.projectId });

        if (isUpdate) {
            isUpdate.userId = req.user._id;
            isUpdate.perspective = req.body.perspective;
            isUpdate.functions = req.body.functions;
            isUpdate.characteristics = req.body.characteristics;
            isUpdate.envirnoment = req.body.envirnoment;
            isUpdate.implementation = req.body.implementation;
            isUpdate.documentation = req.body.documentation;
            isUpdate.assumptions = req.body.assumptions;

            const updatedDescription = await isUpdate.save();
            res.status(200).send(updatedDescription);
        } else {
            let description = new Description(desc);
            await description.save();
            res.status(200).send(description);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});

router.post("/descreview", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const desc = _.pick(bodyData, [
            "userId",
            "projectId",
            "perspectiveReview",
            "functionsReview",
            "characteristicsReview",
            "envirnomentReview",
            "implementationReview",
            "documentationReview",
            "assumptionsReview",
        ]);
        const { error } = descriptionValidationReview(desc);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne(
            { _id: req.body.projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const existingDescription = await Description.findOne({
            projectId: req.body.projectId,
        });
        console.log(existingDescription);

        if (existingDescription) {
            existingDescription.perspectiveReview = req.body.perspectiveReview;
            existingDescription.functionsReview = req.body.functionsReview;
            existingDescription.characteristicsReview = req.body.characteristicsReview;
            existingDescription.envirnomentReview = req.body.envirnomentReview;
            existingDescription.implementationReview = req.body.implementationReview;
            existingDescription.documentationReview = req.body.documentationReview;
            existingDescription.assumptionsReview = req.body.assumptionsReview;

            const updatedDescription = await existingDescription.save();
            res.status(200).send(updatedDescription);
        } else {
            let description = new Description(desc);
            await description.save();
            res.status(200).send(description);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});

// PUT | GET PROJECT DESCRIPTION | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.get("/desc/:id", [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isHas = await Description.findOne({ projectId });
        if (!isHas) return res.status(400).send("Record not found.");

        const isManager = await Project.findOne(
            { _id: projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const desc = await Description.findById(isHas._id);
        res.status(200).send(desc);
    } catch (err) {
        console.log(err);
        next();
    }
});
//  -----------  CHAPTER 3 : Req --------------
// POST | ADD PROJECT DESCRIPTION | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.post("/requi", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const desc = _.pick(bodyData, [
            "userId",
            "projectId",
            "requ",
        ]);
        const { error } = chap3Validation(desc);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne(
            { _id: req.body.projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const isUpdate = await Chapt3.find({ projectId: req.body.projectId });
        if (isUpdate[0]) {
            const updateId = isUpdate[0]._id;
            console.log("update");
            let update = await Chapt3.findOneAndUpdate(
                { _id: updateId },
                {
                    $set: {
                        userId: req.user._id,
                        projectId: req.body.projectId,
                        requ: req.body.requ,
                    },
                }
            );
            res.status(200).send(update);
        } else {
            let description = new Chapt3(desc);
            await description.save();
            res.status(200).send(description);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});
router.post("/requireview", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const desc = _.pick(bodyData, [
            "userId",
            "projectId",
            "requReview",
        ]);
        const { error } = chap3ValidationReview(desc);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne(
            { _id: req.body.projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const existingChapt3 = await Chapt3.findOne({
            projectId: req.body.projectId,
        });
        console.log(existingChapt3);

        if (existingChapt3) {
            existingChapt3.requReview = req.body.requReview;

            const updatedChapt3 = await existingChapt3.save();
            res.status(200).send(updatedChapt3);
        } else {
            let description = new Chapt3(desc);
            await description.save();
            res.status(200).send(description);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});

// PUT | GET PROJECT  | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.get("/requi/:id", [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isHas = await Chapt3.findOne({ projectId });
        if (!isHas) return res.status(400).send("Record not found.");

        const isManager = await Project.findOne(
            { _id: projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const desc = await Chapt3.findById(isHas._id);
        res.status(200).send(desc);
    } catch (err) {
        console.log(err);
        next();
    }
});
//  -----------  CHAPTER 4 : SYSTEM FEATURES  --------------
// POST |  SYSTEM FEATURES REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.post("/feature", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const feature = _.pick(bodyData, ["userId", "projectId", "title", "srId", "features"]);

        // Validate the feature object using Joi
        const { error } = featuresValidation(feature);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        // Check if the project exists
        const project = await Project.findById(req.body.projectId);
        if (!project) {
            return res.status(404).send("Project not found.");
        }

        // Check if the user is a manager of the project
        const isManager = await Project.findOne(
            { _id: req.body.projectId, manager: req.user._id }
        );
        if (!isManager) {
            return res.status(403).send("Access denied.");
        }

        // Check if the srId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.body.srId)) {
            return res.status(400).send("Invalid srId.");
        }

        // Check if the srId exists in the Requirement collection
        const requirement = await Requirement.findById(req.body.srId);
        if (!requirement) {
            return res.status(404).send("Requirement not found.");
        }
        // Create a new feature record
        const newFeature = new Features({
            userId: req.user._id,
            projectId: req.body.projectId,
            title: req.body.title,
            srId: req.body.srId,
            features: req.body.features
        });
        let featureId = await newFeature.save();
        console.log(featureId);

        // Create a new RTM record
        const rtm = new RTM({
            featureId: featureId._id,
            userId: req.user._id,
            projectId: req.body.projectId,
            srId: req.body.srId,
            urId: requirement.userId,
            requirement: requirement.title
        });
        await rtm.save();

        res.status(200).send("Successfully added.");
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error.");
    }
});
router.post("/featurereview", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const desc = _.pick(bodyData, [
            "userId",
            "projectId",
            "featuresReview",
        ]);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");


        const existingFeatures = await Features.findOne({ projectId: req.body.projectId });

        if (existingFeatures) {
            existingFeatures.featuresReview = req.body.featuresReview;

            const updatedFeatures = await existingFeatures.save();
            res.status(200).send(updatedFeatures);
        } else {
            let features = new Features(desc);
            await features.save();
            res.status(200).send(features);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});

// PUT |  SYSTEM FEATURES REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.put("/feature/:id", [auth, manager], async (req, res, next) => {
    try {
        const featureId = req.params.id;
        const bodyData = { userId: req.user._id, ...req.body };
        const feature = _.pick(bodyData, ["userId", "projectId", "title", "srId", "features"]);

        // Validate the feature object using Joi
        const { error } = featuresValidation(feature);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        try {
            // Check if the project exists
            const project = await Project.findById(req.body.projectId);
            if (!project) {
                return res.status(404).send("Project not found.");
            }

            // Check if the feature exists
            const existingFeature = await Features.findById(featureId);
            if (!existingFeature) {
                return res.status(404).send("Feature not found.");
            }

            // Check if the user is a manager of the project
            const isManager = await Project.findOne(
                { _id: req.body.projectId },
                { manager: req.user._id }
            );
            if (!isManager) {
                return res.status(403).send("Access denied.");
            }
            // Check if the srId exists in the Requirement collection
            const requirement = await Requirement.findById(req.body.srId);
            if (!requirement) {
                return res.status(404).send("Requirement not found.");
            }
            // Update the feature 
            await Features.findByIdAndUpdate(featureId, feature, { new: true });

            // Update the RTM
            const rtmId = await RTM.findOne({ featureId: featureId });
            await RTM.findByIdAndUpdate(rtmId._id, {
                featureId: featureId._id,
                userId: req.user._id,
                projectId: req.body.projectId,
                srId: req.body.srId,
                urId: requirement.userId,
                requirement: requirement.title
            }, { new: true });
            res.status(200).send("Successfully Updated.");
        } catch (err) {
            console.log(err);
            res.status(500).send("Internal server error.");
        }
    } catch (err) {
        console.log(err);
        next();
    }
});
// DELETE |  SYSTEM FEATURES REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.delete("/feature/:id", [auth, manager], async (req, res, next) => {
    try {
        const featureId = req.params.id;

        // Validate the feature ID using ObjectId.isValid() method
        if (!mongoose.Types.ObjectId.isValid(featureId)) {
            return res.status(400).send("Invalid feature ID.");
        }
        try {
            // Check if the feature exists
            const existingFeature = await Features.findById(featureId);
            if (!existingFeature) {
                return res.status(404).send("Feature not found.");
            }
            // Check if the user is a manager of the project
            const isManager = await Project.findOne(
                { _id: existingFeature.projectId, manager: req.user._id }
            );
            if (!isManager) {
                return res.status(403).send("Access denied.");
            }
            // Delete the feature and send a success message in the response
            await RTM.findOneAndDelete({ featureId });
            await Features.findByIdAndDelete(featureId);
            res.status(200).send("Feature deleted successfully.");
        } catch (err) {
            console.log(err);
            res.status(500).send("Internal server error.");
        }
    } catch (err) {
        console.log(err);
        next();
    }
});
// GET |  SYSTEM FEATURES REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.get("/feature/:id", [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isHas = await Features.findOne({ projectId });
        if (!isHas) return res.status(400).send("Record not found.");

        const isManager = await Project.findOne(
            { _id: projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const feature = await Features.find({ projectId });
        res.status(200).send(feature);
    } catch (err) {
        console.log(err);
        next();
    }
});
// RTM
router.get("/rtm/:id", [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne(
            { _id: projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const rtm = await RTM.find({ projectId }).select(' -featureId -userId -projectId -date -__v');
        res.status(200).send(rtm);
    } catch (err) {
        console.log(err);
        next();
    }
});
//  -----------  CHAPTER 5 : Other Non Functional Requirements --------------
// POST | ADD PROJECT NON FUNCTIONAL REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.post("/nonfun", [auth, manager], async (req, res, next) => {
    try {
        console.log("test");
        const bodyData = { userId: req.user._id, ...req.body };
        const nonFun = _.pick(bodyData, [
            "userId",
            "projectId",
            "performance",
            "safety",
            "security",
            "quality",
            "business",
        ]);
        console.log(nonFun);
        const { error } = nonfunctionalValidation(nonFun);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const existingNonFunctional = await NonFunctional.findOne({
            projectId: req.body.projectId,
        });

        if (existingNonFunctional) {
            existingNonFunctional.performance = req.body.performance;
            existingNonFunctional.safety = req.body.safety;
            existingNonFunctional.security = req.body.security;
            existingNonFunctional.quality = req.body.quality;
            existingNonFunctional.business = req.body.business;

            const updatedNonFunctional = await existingNonFunctional.save();
            console.log(updatedNonFunctional);
            res.status(200).send(updatedNonFunctional);
        } else {
            let nonfunction = new NonFunctional(nonFun);
            await nonfunction.save();
            res.status(200).send(nonfunction);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});


router.post("/nonfunreview", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const nonFun = _.pick(bodyData, [
            "userId",
            "projectId",
            "performanceReview",
            "safetyReview",
            "securityReview",
            "qualityReview",
            "businessReview",
        ]);
        const { error } = nonfunctionalValidationReview(nonFun);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const existingNonFunctional = await NonFunctional.findOne({
            projectId: req.body.projectId,
        });
        console.log(existingNonFunctional);

        if (existingNonFunctional) {
            existingNonFunctional.performanceReview = req.body.performanceReview;
            existingNonFunctional.safetyReview = req.body.safetyReview;
            existingNonFunctional.securityReview = req.body.securityReview;
            existingNonFunctional.qualityReview = req.body.qualityReview;
            existingNonFunctional.businessReview = req.body.businessReview;

            const updatedNonFunctional = await existingNonFunctional.save();
            res.status(200).send(updatedNonFunctional);
        } else {
            let nonfunction = new NonFunctional(nonFun);
            await nonfunction.save();
            res.status(200).send(nonfunction);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});


// GET |  NON FUNCTIONAL REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.get("/nonfun/:id", [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isHas = await NonFunctional.findOne({ projectId });
        if (!isHas) return res.status(400).send("Record not found.");

        const isManager = await Project.findOne(
            { _id: projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const intro = await NonFunctional.findById(isHas._id);
        res.status(200).send(intro);
    } catch (err) {
        console.log(err);
        next();
    }
});
//  -----------  CHAPTER 6 : OTHER REQUIREMENTS --------------
// POST |  OTHER REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.post("/other", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const otherRequir = _.pick(bodyData, [
            "userId",
            "projectId",
            "requirements",
        ]);
        const { error } = otherReqValidation(otherRequir);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        // const isManager = await Project.findOne({
        //     _id: req.body.projectId,
        //     manager: req.user._id,
        // });
        // if (!isManager) return res.status(403).send("Access denied.");

        const existingOtherRequirements = await OtherRequirements.findOne({
            projectId: req.body.projectId,
        });
        console.log(existingOtherRequirements);

        if (existingOtherRequirements) {
            existingOtherRequirements.requirements = req.body.requirements;
            const updatedOtherRequirements = await existingOtherRequirements.save();
            res.status(200).send(updatedOtherRequirements);
        } else {
            let otherReq = new OtherRequirements(otherRequir);
            await otherReq.save();
            res.status(200).send(otherReq);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});

router.post("/otherreview", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const otherRequir = _.pick(bodyData, [
            "userId",
            "projectId",
            "requirementsReview",
        ]);
        const { error } = otherReqValidationReview(otherRequir);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        // const isManager = await Project.findOne({
        //     _id: req.body.projectId,
        //     manager: req.user._id,
        // });
        // if (!isManager) return res.status(403).send("Access denied.");

        const existingOtherRequirements = await OtherRequirements.findOne({
            projectId: req.body.projectId,
        });
        console.log(existingOtherRequirements);

        if (existingOtherRequirements) {
            existingOtherRequirements.requirementsReview = req.body.requirementsReview;
            const updatedOtherRequirements = await existingOtherRequirements.save();
            res.status(200).send(updatedOtherRequirements);
        } else {
            let otherReq = new OtherRequirements(otherRequir);
            await otherReq.save();
            res.status(200).send(otherReq);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});

// GET |  OTHER REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.get("/other/:id", [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isHas = await OtherRequirements.findOne({ projectId });
        if (!isHas) return res.status(400).send("Record not found.");

        const isManager = await Project.findOne(
            { _id: projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const requirements = await OtherRequirements.findById(isHas._id);
        res.status(200).send(requirements);
    } catch (err) {
        console.log(err);
        next();
    }
});

let newFileName;
const storage = multer.diskStorage({
    destination: "backend/assets/upload",
    filename: function (req, file, cb) {
        newFileName =
            file.fieldname + "-" + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    },
});
// initialize upload
const upload = multer({
    storage: storage,
    limits: { fieldSize: 100000 },
}).single("image");

router.post("/uploadimg", [auth], (req, res, next) => {
    try {
        upload(req, res, async function (err) {
            if (err) {
                res.status(500).send({ error: err });
                return;
            }

            if (req.file == null) {
                res.status(400).send("Select Image.");
                return;
            }

            // Read the img file from tmp in-memory location
            const readStream = fs.createReadStream(req.file.path);

            // Create a new image model
            const newItem = {
                url: `/${newFileName}`,
            };
            const img = new imageModel(newItem);

            // Save the image to the database
            try {
                await img.save();
            } catch (err) {
                res.status(500).send({ error: "Failed to save image to database" });
                return;
            }

            console.log("Saved to database");

            // Send a JSON response with information about the uploaded image
            res.json({
                id: img._id,
                url: `/assets/upload/${newItem.url}`,
                createdAt: img.createdAt,
            });
        });
    } catch (err) {
        console.error(err);
        next();
    }
});
const htmlToLatex = async (html) => await convertText(html);
//rendering json to latex
function generateTexFile(srsData) {
    let jsonData = {
        title: "My Report",
        author: "John Doe",
        date: "January 1, 2021",
        data: [
            {
                name: "Item 1",
                value: 100
            },
            {
                name: "Item 2",
                value: 200
            }
        ]
    };
    const rtmData = srsData.rtm.map(item => {
        const urId = `URID-${item.urId.toString().substr(0, 6)}-${item.urId.toString().substr(6, 6)}-${item.urId.toString().substr(12, 6)}`; // Convert Object ID to string and use a meaningful naming convention for URID
        const srId = `SRID-${item.srId.toString().substr(0, 6)}-${item.srId.toString().substr(6, 6)}-${item.srId.toString().substr(12, 6)}`; // Convert Object ID to string and use a meaningful naming convention for SRID
        return {
            urId,
            srId,
            requirement: item.requirement
        };
    });
    let texFile = `
    \\documentclass{scrreprt} 
    \\usepackage{listings}
    \\usepackage{underscore}
    \\usepackage{graphicx}
    \\usepackage[bookmarks=true]{hyperref}
    \\usepackage[utf8]{inputenc}
    \\usepackage[english]{babel}
    \\usepackage{longtable}
    \\usepackage{array}
    \\usepackage{booktabs}
    \\hypersetup{
        bookmarks=false,    % show bookmarks bar?
        pdftitle={Software Requirement Specification},    % title
        pdfauthor={Jean-Philippe Eisenbarth},                     % author
        pdfsubject={TeX and LaTeX},                        % subject of the document
        pdfkeywords={TeX, LaTeX, graphics, images}, % list of keywords
        colorlinks=true,       % false: boxed links; true: colored links
        linkcolor=blue,       % color of internal links
        citecolor=black,       % color of links to bibliography
        filecolor=black,        % color of file links
        urlcolor=purple,        % color of external links
        linktoc=page            % only page is linked
    }% 
    \\def\\myversion{${jsonData.title}}
    \\date{}
    
    \\begin{document}
    
    \\begin{flushright}
        \\rule{16cm}{5pt}\\vskip1cm
        \\begin{bfseries}
            \\Huge{SOFTWARE REQUIREMENTS\\ SPECIFICATION}\\
            \\vspace{1.5cm} 
            \\\\for\\\\
            \\vspace{1.5cm}
            ${srsData.project.title}\\\\
            \\vspace{1.5cm}
            \\LARGE{Version \\myversion}\\\\
            \\vspace{1.5cm}
            Prepared by : ${srsData.project.author}\\\\ 
            \\vspace{1.5cm}
            \\today\\
        \\end{bfseries}
    \\end{flushright}
    
    
    \\tableofcontents
    
    \\chapter{Introduction} 
    \\section{Purpose}
    ${srsData.intro[0].purpose}
    \\section{Document Conventions} 
    ${srsData.conventionLatex}
    \\section{Intended Audience and Reading Suggestions}
    ${srsData.conventionLatex}
    \\section{Product Scope}
    ${srsData.scopeLatex}
    \\section{References} 
    ${srsData.referencesLatex}
    
    \\chapter{Overall Description} 
    \\section{Product Perspective}
    ${srsData.desc[0].perspective}
    \\section{Product Functions}
    ${srsData.desc[0].functions}
    \\section{User Classes and Characteristics}
    ${srsData.desc[0].characteristics}
    \\section{Operating Environment}
    ${srsData.desc[0].envirnoment}
    \\section{Design and Implementation Constraints}
    ${srsData.desc[0].implementation}
    \\section{User Documentation}
    ${srsData.desc[0].documentation}
    \\section{Assumptions and Dependencies}
    ${srsData.desc[0].assumptions}
    \\chapter{Features}  
    ${srsData.features.map((req, index) => `
    \\section{Feature ${index + 1}}
        ${req.features}
    

    `).join('\n')}
    
    \\begin{center}
    \\begin{longtable}{| m{1cm} | m{4cm} | m{4cm} | m{5cm} |}
    \\caption{Requirement Tracability Matrix}\\label{tab:Requirement Tracability Matrix}\\\\
    \\hline
    \\textbf{RTM Id} & \\textbf{URID} & \\textbf{SRID} & \\textbf{Requirement}\\\\ 
    \\hline
    \\endfirsthead
    \\multicolumn{4}{l}{\\tablename\\ \\thetable\\ -- \\textit{Continued from previous page}} \\\\
    \\hline
    \\textbf{RTM Id} & \\textbf{URID} & \\textbf{SRID} & \\textbf{Requirement}\\\\
    \\hline
    \\endhead
    \\hline
    \\multicolumn{4}{r}{\\textit{Continued on next page}} \\\\
    \\endfoot
    \\hline
    \\endlastfoot

    ${rtmData.map((item, index) => `\\textbf{${index + 1}.} & ${item.urId} & ${item.srId} & ${item.requirement} \\\\ \\hline`).join('')}

    \\end{longtable}
    \\end{center}

    \\chapter{Other Nonfunctional Requirements}
    \\section{Performance Requirements} 
    ${srsData.nonFun[0].performance} 
    \\section{Saftey Requirements}
    ${srsData.nonFun[0].safety} 
    \\section{Security Requirements}
    ${srsData.nonFun[0].security} 
    \\section{Software Quality Attributes}
    ${srsData.nonFun[0].quality}  
    \\section{Business Rules} 
    ${srsData.nonFun[0].business}

    \\chapter{Other Requirements}
    ${srsData.otherReqLatex}


    \\end{document}`;
    return texFile;
}
function generateTexFileReview(srsData) {
    let jsonData = {
        title: "SRS Review",
        author: "",
        date: "",
        data: [
            {
                name: "Item 1",
                value: 100
            },
            {
                name: "Item 2",
                value: 200
            }
        ]
    };

    let texFile = `
    \\documentclass{scrreprt} 
    \\usepackage{listings}
    \\usepackage{underscore}
    \\usepackage{graphicx}
    \\usepackage[bookmarks=true]{hyperref}
    \\usepackage[utf8]{inputenc}
    \\usepackage[english]{babel}
    \\usepackage{longtable}
    \\usepackage{array}
    \\usepackage{booktabs}
    \\hypersetup{
        bookmarks=false,    % show bookmarks bar?
        pdftitle={Software Requirement Specification},    % title
        pdfauthor={Jean-Philippe Eisenbarth},                     % author
        pdfsubject={TeX and LaTeX},                        % subject of the document
        pdfkeywords={TeX, LaTeX, graphics, images}, % list of keywords
        colorlinks=true,       % false: boxed links; true: colored links
        linkcolor=blue,       % color of internal links
        citecolor=black,       % color of links to bibliography
        filecolor=black,        % color of file links
        urlcolor=purple,        % color of external links
        linktoc=page            % only page is linked
    }% 
    \\def\\myversion{${jsonData.title}}
    \\date{}
    
    \\begin{document}
    
    \\begin{flushright}
        \\rule{16cm}{5pt}\\vskip1cm
        \\begin{bfseries}
            \\Huge{SOFTWARE REQUIREMENTS\\ SPECIFICATION}\\
            \\vspace{1.5cm} 
            \\\\for\\\\
            \\vspace{1.5cm}
            ${srsData.project.title}\\\\
            \\vspace{1.5cm}
            \\LARGE{Version \\myversion}\\\\
            \\vspace{1.5cm}
            Prepared by : ${srsData.project.author}\\\\ 
            \\vspace{1.5cm}
            \\today\\
        \\end{bfseries}
    \\end{flushright}
    
    
    \\tableofcontents
    
    \\chapter{Introduction} 
    \\section{Purpose Review}
    ${srsData.intro[0].purpose}
    \\section{Document Conventions Review} 
    ${srsData.conventionLatex}
    \\section{Intended Audience and Reading Suggestions Review}
    ${srsData.conventionLatex}
    \\section{Product Scope Review}
    ${srsData.scopeLatex}
    \\section{References Review} 
    ${srsData.referencesLatex}
    
    \\chapter{Overall Description} 
    \\section{Product Perspective}
    ${srsData.desc[0].perspectiveReview}
    \\section{Product Functions Review}
    ${srsData.desc[0].functions}
    \\section{User Classes and Characteristics Review}
    ${srsData.desc[0].characteristicsReview}
    \\section{Operating Environment Review}
    ${srsData.desc[0].envirnomentReview}
    \\section{Design and Implementation Constraints Review}
    ${srsData.desc[0].implementationReview}
    \\section{User Documentation Review}
    ${srsData.desc[0].documentationReview}
    \\section{Assumptions and Dependencies Review}
    ${srsData.desc[0].assumptionsReview}
    \\chapter{Features Review}  
    ${srsData.featuresLatex}
    \\chapter{Other Nonfunctional Requirements}
    \\section{Performance Requirements} 
    ${srsData.nonFun[0].performanceReview} 
    \\section{Saftey Requirements}
    ${srsData.nonFun[0].safetyReview} 
    \\section{Security Requirements}
    ${srsData.nonFun[0].securityReview} 
    \\section{Software Quality Attributes}
    ${srsData.nonFun[0].qualityReview}  
    \\section{Business Rules} 
    ${srsData.nonFun[0].businessReview}

    \\chapter{Other Requirements}
    ${srsData.otherReqLatex}


    \\end{document}`;
    return texFile;
}
router.get("/generatepdf/:id", auth, async (req, res) => {

    const projectId = req.params.id;
    // Validate the feature ID using ObjectId.isValid() method
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        return res.status(400).send("Invalid project ID.");
    }
    const isProject = await Project.findById(projectId);
    if (!isProject) {
        return res.status(404).send("Prohect not found.");
    }
    // const projectId = "63d9f3eb9d3284c80d853a30";
    const srsData = await getSrsData(projectId);
    // Generate the .tex file
    const texFile = generateTexFile(srsData);
    // Generating dynamic file name and folder according to project id
    const filename = `srs_${projectId}.tex`;
    const projectDir = path.resolve('backend/documents', projectId);
    const texFileName = path.resolve(projectDir, filename);

    fs.mkdirSync(projectDir, { recursive: true });
    fs.writeFile(texFileName, texFile, (err) => {
        if (err) {
            console.error("An error occurred while writing the file.");
            return res.status(500).send("An error occurred while writing the file.");
        }
        console.log("File has been successfully written.");
        exec(`C:/Users/Adnan/AppData/Local/Programs/MiKTeX/miktex/bin/x64/pdflatex -output-directory=${projectDir} ${texFileName}`, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error: ${err}`);
                return res.status(500).send(`Error: ${err}`);
            }
            console.error(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            if (stderr) {
                console.error(`LaTeX compiling errors: ${stderr}`);
                return res.status(500).send(`LaTeX compiling errors: ${stderr}`);
            }
            const pdfFile = path.resolve(path.dirname(texFileName), filename.replace(".tex", ".pdf"));
            if (!fs.existsSync(pdfFile)) {
                console.error("Error: PDF file not found.");
                return res.status(500).send("Error: PDF file not found.");
            }
            console.log("File has been successfully converted to PDF.");
            res.contentType("application/pdf");
            res.setHeader("Content-Disposition", "attachment");
            return res.status(200).sendFile(pdfFile);
        });
    });

});
router.get("/generatepdfreview/:id", auth, async (req, res) => {

    const projectId = req.params.id;
    // Validate the feature ID using ObjectId.isValid() method
    if (!mongoose.Types.ObjectId.isValid(projectId)) {
        return res.status(400).send("Invalid project ID.");
    }
    const isProject = await Project.findById(projectId);
    if (!isProject) {
        return res.status(404).send("Prohect not found.");
    }
    // const projectId = "63d9f3eb9d3284c80d853a30";
    const srsData = await getSrsDataReview(projectId);
    // Generate the .tex file
    const texFile = generateTexFileReview(srsData);
    // Generating dynamic file name and folder according to project id
    const filename = `srs_${projectId}-review.tex`;
    const projectDir = path.resolve('backend/documents', projectId);
    const texFileName = path.resolve(projectDir, filename);

    fs.mkdirSync(projectDir, { recursive: true });
    fs.writeFile(texFileName, texFile, (err) => {
        if (err) {
            console.error("An error occurred while writing the file.");
            return res.status(500).send("An error occurred while writing the file.");
        }
        console.log("File has been successfully written.");
        exec(`C:/Users/Adnan/AppData/Local/Programs/MiKTeX/miktex/bin/x64/pdflatex -output-directory=${projectDir} ${texFileName}`, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error: ${err}`);
                return res.status(500).send(`Error: ${err}`);
            }
            console.error(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            if (stderr) {
                console.error(`LaTeX compiling errors: ${stderr}`);
                return res.status(500).send(`LaTeX compiling errors: ${stderr}`);
            }
            const pdfFile = path.resolve(path.dirname(texFileName), filename.replace(".tex", ".pdf"));
            if (!fs.existsSync(pdfFile)) {
                console.error("Error: PDF file not found.");
                return res.status(500).send("Error: PDF file not found.");
            }
            console.log("File has been successfully converted to PDF.");
            res.contentType("application/pdf");
            res.setHeader("Content-Disposition", "attachment");
            return res.status(200).sendFile(pdfFile);
        });
    });

});
async function getSrsDataReview(projectId) {
    const query = { projectId: projectId };

    const project = await Project.findById(projectId).select('-description -status -stakeholders');
    const intro = await Introduction.find(query).select('-_id -userId -projectId -locked');
    const conventionLatex = await htmlToLatex(intro[0].conventionsReview);
    const audienceLatex = await htmlToLatex(intro[0].audienceReview);
    const scopeLatex = await htmlToLatex(intro[0].scopeReview);
    const referencesLatex = await htmlToLatex(intro[0].referencesReview);

    const desc = await Description.find(query).select('-_id -userId -projectId -locked');
    const features = await Features.find(query).select('-_id -userId -projectId -locked');
    const rtm = await RTM.find({ projectId }).select(' -featureId -userId -projectId -date -__v');
    const nonFun = await NonFunctional.find(query).select('-_id -userId -projectId -locked');
    const otherReq = await OtherRequirements.find(query).select('-_id -userId -projectId -locked');
    const otherReqLatex = await htmlToLatex(otherReq[0].requirementsReview);
    const featuresLatex = await htmlToLatex(features[0].featuresReview);
    return {
        project,
        intro,
        conventionLatex,
        audienceLatex,
        scopeLatex,
        referencesLatex,
        desc,
        features,
        rtm,
        nonFun,
        otherReqLatex,
        featuresLatex
    };
}
async function getSrsData(projectId) {
    const query = { projectId: projectId };

    const project = await Project.findById(projectId).select('-description -status -stakeholders');
    const intro = await Introduction.find(query).select('-_id -userId -projectId -locked');
    const conventionLatex = await htmlToLatex(intro[0].conventions);
    const audienceLatex = await htmlToLatex(intro[0].audience);
    const scopeLatex = await htmlToLatex(intro[0].scope);
    const referencesLatex = await htmlToLatex(intro[0].references);

    const desc = await Description.find(query).select('-_id -userId -projectId -locked');
    const features = await Features.find(query).select('-_id -userId -projectId -locked');
    const rtm = await RTM.find({ projectId }).select(' -featureId -userId -projectId -date -__v');
    const nonFun = await NonFunctional.find(query).select('-_id -userId -projectId -locked');
    const otherReq = await OtherRequirements.find(query).select('-_id -userId -projectId -locked');
    const otherReqLatex = await htmlToLatex(otherReq[0].requirements);
    const featuresLatex = await htmlToLatex(features[0].featuresReview);

    return {
        project,
        intro,
        conventionLatex,
        audienceLatex,
        scopeLatex,
        referencesLatex,
        desc,
        features,
        rtm,
        nonFun,
        featuresLatex,
        otherReqLatex,
    };
}

// ------------------------- Review -----------------------
router.post("/introreview", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const intro = _.pick(bodyData, [
            "userId",
            "projectId",
            "purposeReview",
            "conventionsReview",
            "audienceReview",
            "scopeReview",
            "referencesReview",
        ]);
        const { error } = introductionValidationReview(intro);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne({
            _id: req.body.projectId,
            manager: req.user._id,
        });
        if (!isManager) return res.status(403).send("Access denied.");

        const existingIntroduction = await Introduction.findOne({
            projectId: req.body.projectId,
        });
        console.log(existingIntroduction);

        if (existingIntroduction) {
            existingIntroduction.purposeReview = req.body.purposeReview;
            existingIntroduction.conventionsReview = req.body.conventionsReview;
            existingIntroduction.audienceReview = req.body.audienceReview;
            existingIntroduction.scopeReview = req.body.scopeReview;
            existingIntroduction.referencesReview = req.body.referencesReview;

            const updatedIntroduction = await existingIntroduction.save();
            res.status(200).send(updatedIntroduction);
        } else {
            let introduction = new Introduction(intro);
            await introduction.save();
            res.status(200).send(introduction);
        }
    } catch (err) {
        console.log(err);
        next();
    }
});


module.exports = router;
