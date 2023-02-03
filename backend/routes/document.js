const express = require('express');
// const Joi = require('joi'); 
const _ = require('lodash');
const fs = require("fs");
const multer = require("multer");
const path = require('path');
const auth = require('../middleware/auth');
const manager = require('../middleware/manager');
const child_process = require("child_process");
// const admin = require('../middleware/admin');
const { validateProject, Project } = require('../models/project');
const { introductionValidation, Introduction } = require('../models/introduction');
const { Description, descriptionValidation } = require('./../models/description');
const { NonFunctional, nonfunctionalValidation } = require('./../models/nonfunctional');
const { Features, featuresValidation } = require('./../models/features');
const { OtherRequirements, otherReqValidation } = require('./../models/OtherRequirements');
var imageModel = require('./../models/images');
const router = express.Router();

//  -----------  CHAPTER 0 : TITLE --------------
// POST | ADD PROJECT TITLE | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.post('/title', [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { "managerId": req.user._id, ...req.body, "description": "tesitng" };
        const title = _.pick(bodyData, ['managerId', 'projectId', 'title', 'author', 'organization', 'description']);
        const { error } = validateProject(_.pick(title, ['managerId', 'title', 'description']));
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isManager = await Project.findOne({ _id: req.body.projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        const isUpdate = await Project.find({ projectId: req.body.projectId });
        if (isUpdate[0]) {
            const updateId = isUpdate[0]._id;
            console.log("update");
            let update = await Project.findOneAndUpdate({ _id: updateId },
                {
                    $set: {
                        title: req.body.title || isUnique.title,
                        author: req.body.author || isUnique.author,
                        organization: req.body.organization || isUnique.organization
                    }
                });
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

        const isUpdate = await Introduction.find({ projectId: req.body.projectId });
        if (isUpdate[0]) {
            const updateId = isUpdate[0]._id;
            console.log("update");
            let update = await Introduction.findOneAndUpdate({ _id: updateId },
                {
                    $set: {
                        "userId": req.user._id,
                        "projectId": req.body.projectId,
                        "purpose": req.body.purpose,
                        "conventions": req.body.conventions,
                        "audience": req.body.audience,
                        "scope": req.body.scope,
                        "references": req.body.references
                    }
                });
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
router.get('/intro/:id', [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isHas = await Introduction.findOne({ projectId });
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
// POST | ADD PROJECT DESCRIPTION | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.post('/desc', [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { "userId": req.user._id, ...req.body };
        const desc = _.pick(bodyData, ['userId', 'projectId', 'perspective', 'functions', 'characteristics', 'envirnoment', 'implementation', 'documentation', 'assumptions']);
        const { error } = descriptionValidation(desc);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isManager = await Project.findOne({ _id: req.body.projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        const isUpdate = await Description.find({ projectId: req.body.projectId });
        if (isUpdate[0]) {
            const updateId = isUpdate[0]._id;
            console.log("update");
            let update = await Description.findOneAndUpdate({ _id: updateId },
                {
                    $set: {
                        "userId": req.user._id,
                        "projectId": req.body.projectId,
                        "perspective": req.body.perspective,
                        "functions": req.body.functions,
                        "characteristics": req.body.characteristics,
                        "implementation": req.body.implementation,
                        "documentation": req.body.documentation,
                        "assumptions": req.body.assumptions,
                    }
                });
            res.status(200).send(update);
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
router.get('/desc/:id', [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isHas = await Description.findOne({ projectId });
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
//  -----------  CHAPTER 4 : SYSTEM FEATURES  --------------
// POST |  SYSTEM FEATURES REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.post('/feature', [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { "userId": req.user._id, ...req.body };
        const feature = _.pick(bodyData, ['userId', 'projectId', 'features']);
        const { error } = featuresValidation(feature);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isManager = await Project.findOne({ _id: req.body.projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        // if(req.body.proj)
        const isUpdate = await Features.find({ projectId: req.body.projectId });
        console.log(isUpdate[0]);

        if (isUpdate[0]) {
            const featureId = isUpdate[0]._id;
            console.log(featureId);
            let update = await Features.findOneAndUpdate({ _id: featureId }, { $set: { features: req.body.features } });
            res.status(200).send(update);

        } else {
            console.log("New");

            let features = new Features(feature);
            await features.save();
            res.status(200).send(features);
        }


    } catch (err) {
        console.log(err);
        next();
    }
});
// GET |  SYSTEM FEATURES REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.get('/feature/:id', [auth, manager], async (req, res, next) => {
    try {

        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isHas = await Features.findOne({ projectId });
        if (!isHas) return res.status(400).send('Record not found.');

        const isManager = await Project.findOne({ _id: projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        const feature = await Features.findById(isHas._id)
        res.status(200).send(feature);


    } catch (err) {
        console.log(err);
        next();
    }
});
//  -----------  CHAPTER 5 : Other Non Functional Requirements --------------
// POST | ADD PROJECT NON FUNCTIONAL REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.post('/nonfun', [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { "userId": req.user._id, ...req.body };
        const nonFun = _.pick(bodyData, ['userId', 'projectId', 'performance', 'safety', 'security', 'quality', 'business']);
        const { error } = nonfunctionalValidation(nonFun);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isManager = await Project.findOne({ _id: req.body.projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        const isUpdate = await NonFunctional.find({ projectId: req.body.projectId });
        if (isUpdate[0]) {
            const updateId = isUpdate[0]._id;
            let update = await NonFunctional.findOneAndUpdate({ _id: updateId },
                {
                    $set: {
                        "userId": req.user._id,
                        "projectId": req.body.projectId,
                        "performance": req.body.perspective,
                        "safety": req.body.functions,
                        "security": req.body.characteristics,
                        "quality": req.body.implementation,
                        "business": req.body.documentation
                    }
                });
            res.status(200).send(update);
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
router.get('/nonfun/:id', [auth, manager], async (req, res, next) => {
    try {

        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isHas = await NonFunctional.findOne({ projectId });
        if (!isHas) return res.status(400).send('Record not found.');

        const isManager = await Project.findOne({ _id: projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        const intro = await NonFunctional.findById(isHas._id)
        res.status(200).send(intro);


    } catch (err) {
        console.log(err);
        next();
    }
});
//  -----------  CHAPTER 6 : OTHER REQUIREMENTS --------------
// POST |  OTHER REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE | 
router.post('/other', [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { "userId": req.user._id, ...req.body };
        const otherRequir = _.pick(bodyData, ['userId', 'projectId', 'requirements']);
        const { error } = otherReqValidation(otherRequir);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isManager = await Project.findOne({ _id: req.body.projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        // if(req.body.proj)
        const isUpdate = await OtherRequirements.find({ projectId: req.body.projectId });
        console.log(isUpdate[0]);

        if (isUpdate[0]) {
            const featureId = isUpdate[0]._id;
            let update = await OtherRequirements.findOneAndUpdate({ _id: featureId }, { $set: { requirements: req.body.requirements } });
            res.status(200).send(update);

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
router.get('/other/:id', [auth, manager], async (req, res, next) => {
    try {
        const projectId = req.params.id;
        const isUnique = await Project.findById(projectId);
        if (!isUnique) return res.status(400).send('Project not found.');

        const isHas = await OtherRequirements.findOne({ projectId });
        if (!isHas) return res.status(400).send('Record not found.');

        const isManager = await Project.findOne({ _id: projectId }, { manager: req.user._id });
        if (!isManager) return res.status(403).send('Access denied.');

        const requirements = await OtherRequirements.findById(isHas._id)
        res.status(200).send(requirements);


    } catch (err) {
        console.log(err);
        next();
    }
});
let newFileName;
const storage = multer.diskStorage({
    destination: './public/upload',
    filename: function (req, file, cb) {
        newFileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});
// initialize upload
const upload = multer({
    storage: storage,
    limits: { fieldSize: 100000 }
}).single('image');

router.post("/uploadimg", [auth], (req, res, next) => {
    try {
        upload(req, res, async function (err) {
            if (err) {
                res.status(500).send({ error: err });
            }
            if (req.file == null) {
                res.send('Select Image.');
            } else {
                // read the img file from tmp in-memory location
                var newImg = fs.readFileSync(req.file.path);
                // encode the file as a base64 string.
                // var encImg = newImg.toString('base64');
                var newItem = {
                    url: `/public/upload/${newFileName}`
                };
                let img = new imageModel(newItem);
                await img.save()
                console.log("Saved To database");
                res.send(newItem.url);
            }
        });
    } catch (err) {
        console.log(err);
        next();
    }


})


function generateTexFile(data) {
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
    let texFile = `
    \\documentclass{scrreprt} 
    \\usepackage{listings}
    \\usepackage{underscore}
    \\usepackage{graphicx}
    \\usepackage[bookmarks=true]{hyperref}
    \\usepackage[utf8]{inputenc}
    \\usepackage[english]{babel}
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
            IICT WEBSITE\\\\
            \\vspace{1.5cm}
            Prepared by : 1. Md. Yasmi Tohabar (2016831021)\\\\
            2. Akaash (2016831034) 
            \\vspace{1.5cm}
            Submitted to : Fazle Mohammed Tawsif \\\\Lecturer\\\\
            \\vspace{1.5cm}
            \\today\\
        \\end{bfseries}
    \\end{flushright}
    \\tableofcontents

\\chapter{Introduction}

\\section{Purpose}
This is very much difficult to maintain all the data of a course as a hard copy. Any data can be changed, deleted, added at any time. Such as - A new teacher can be assigned for a course, he also can be changed ; And so many student are getting admitted every semester. So, "IICT WEBSITE" is the solution. "IICT WEBSITE" is a official website based on marking and resulting system of IICT authorized. The main concept of "IICT WEBSITE" is to devitalized PGD, MIT courses, their students and teachers data maintenance. 
\\section{Intended Audience and Reading Suggestions}
This SRS is for developers, project managers, users and testers. Further the discussion will provide all the internal, external, functional and also non-functional informations about "IICT WEBSITE".

\\section{Project Scope}
"IICT WEBSITE" creates a space for Director, Teachers, Students and Office Staffs for maintaining particular programs like - PGD, MIT. 
\\newline
After getting admitted to a programs a student has been given a registration number, by using which he/she can inter from-fill-up page. It will take his/her personal informations, admitted fee imformations.He will be added as a student of that particuler programs after completing his/her payment process. After that he/she can select course of the program and then pay the fee for that. Student profile will contain all his personal informations, past results, recent result and notifications.
\\newline
Office staff only post result publicly and also notice. But off course with the permission of Director.  
\\newline
Directors' main work is to assign teachers to the courses they will take, create teachers profile and approve mark-sheet. He can move a teacher from one course to another. He also can be a teacher and can also can take the courses and perform all the functionality of teacher like- marking papers. He can also directly post notice to the website, teachers and also students.
\\newline
Teachers' account are created by director. They (Teachers) entry marks of the students, can view all the marks of the students and change it after submitted it to the director. Every student of that particular course will be under the teacher who is assigned to that course. 
\\newline
  
\\newline
Teachers' account are created by director. They (Teachers) entry marks of the students, can view all the marks of the students and change it after submitted it to the director. Every student of that particular course will be under the teacher who is assigned to that course. 
 
    \\end{document}`;
    return texFile;
}
router.get("/generatepdf", auth, (req, res) => {
    try {
        const data = "adnan";
        // Convert the JSON data to a .tex file
        const texFile = generateTexFile(data);
        const projectId = "23x4";

        const filename = "srs_" + projectId + ".pdf";
        const texFileName = path.resolve(filename);

        fs.writeFileSync(texFileName, texFile);
        // Convert the .tex file to a .pdf file
        child_process.execSync(`pdflatex ${texFileName}`);
        const pdfFile = path.resolve(texFileName);
        if (fs.existsSync(pdfFile)) {
            // Return the generated .pdf file
            console.log(pdfFile);
            res.contentType("application/pdf");
            res.status(200).sendFile(pdfFile, { headers: { "Content-Disposition": "attachment" } });
        } else {
            res.status(500).send("Error: PDF file not found.");
        }
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;
