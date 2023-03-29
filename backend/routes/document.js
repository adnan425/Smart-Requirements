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


// const admin = require('../middleware/admin');
const { validateProject, Project } = require("../models/project");
const {
    introductionValidation,
    Introduction,
} = require("../models/introduction");
const {
    Description,
    descriptionValidation,
} = require("./../models/description");
const {
    NonFunctional,
    nonfunctionalValidation,
} = require("./../models/nonfunctional");
const { Features, featuresValidation } = require("./../models/features");
const {
    OtherRequirements,
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
                        purpose: req.body.purpose,
                        conventions: req.body.conventions,
                        audience: req.body.audience,
                        scope: req.body.scope,
                        references: req.body.references,
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

        const isUpdate = await Description.find({ projectId: req.body.projectId });
        if (isUpdate[0]) {
            const updateId = isUpdate[0]._id;
            console.log("update");
            let update = await Description.findOneAndUpdate(
                { _id: updateId },
                {
                    $set: {
                        userId: req.user._id,
                        projectId: req.body.projectId,
                        perspective: req.body.perspective,
                        functions: req.body.functions,
                        characteristics: req.body.characteristics,
                        envirnoment: req.body.envirnoment,
                        implementation: req.body.implementation,
                        documentation: req.body.documentation,
                        assumptions: req.body.assumptions,
                    },
                }
            );
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
//  -----------  CHAPTER 4 : SYSTEM FEATURES  --------------
// POST |  SYSTEM FEATURES REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.post("/feature", [auth, manager], async (req, res, next) => {
    try {
        const bodyData = { userId: req.user._id, ...req.body };
        const feature = _.pick(bodyData, ["userId", "projectId", "features"]);
        const { error } = featuresValidation(feature);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne(
            { _id: req.body.projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        // if(req.body.proj)
        const isUpdate = await Features.find({ projectId: req.body.projectId });
        console.log(isUpdate[0]);

        if (isUpdate[0]) {
            const featureId = isUpdate[0]._id;
            console.log(featureId);
            let update = await Features.findOneAndUpdate(
                { _id: featureId },
                { $set: { features: req.body.features } }
            );
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

        const feature = await Features.findById(isHas._id);
        res.status(200).send(feature);
    } catch (err) {
        console.log(err);
        next();
    }
});
//  -----------  CHAPTER 5 : Other Non Functional Requirements --------------
// POST | ADD PROJECT NON FUNCTIONAL REQUIREMENTS | TWO MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE |
router.post("/nonfun", [auth, manager], async (req, res, next) => {
    try {
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
        const { error } = nonfunctionalValidation(nonFun);
        if (error) return res.status(400).send(error.details[0].message);

        const isUnique = await Project.findById(req.body.projectId);
        if (!isUnique) return res.status(400).send("Project not found.");

        const isManager = await Project.findOne(
            { _id: req.body.projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        const isUpdate = await NonFunctional.find({
            projectId: req.body.projectId,
        });
        if (isUpdate[0]) {
            const updateId = isUpdate[0]._id;
            let update = await NonFunctional.findOneAndUpdate(
                { _id: updateId },
                {
                    $set: {
                        userId: req.user._id,
                        projectId: req.body.projectId,
                        performance: req.body.perspective,
                        safety: req.body.functions,
                        security: req.body.characteristics,
                        quality: req.body.implementation,
                        business: req.body.documentation,
                    },
                }
            );
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

        const isManager = await Project.findOne(
            { _id: req.body.projectId },
            { manager: req.user._id }
        );
        if (!isManager) return res.status(403).send("Access denied.");

        // if(req.body.proj)
        const isUpdate = await OtherRequirements.find({
            projectId: req.body.projectId,
        });
        console.log(isUpdate[0]);

        if (isUpdate[0]) {
            const featureId = isUpdate[0]._id;
            let update = await OtherRequirements.findOneAndUpdate(
                { _id: featureId },
                { $set: { requirements: req.body.requirements } }
            );
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
    ${srsData.featuresLatex}
      
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
router.get("/generatepdf", auth, async (req, res) => {
    const projectId = "63d9f3eb9d3284c80d853a30";
    let srsData = null;
    const query = { projectId: projectId };
    const project = await Project.findById(projectId).select('-description -status -stakeholders');
    const intro = await Introduction.find(query).select('-_id -userId -projectId -locked');
    const conventionLatex = await htmlToLatex(intro[0].conventions);
    const audienceLatex = await htmlToLatex(intro[0].audience);
    const scopeLatex = await htmlToLatex(intro[0].scope);
    const referencesLatex = await htmlToLatex(intro[0].references);

    const desc = await Description.find(query).select('-_id -userId -projectId -locked');
    const features = await Features.find(query).select('-_id -userId -projectId -locked');
    const featuresLatex = await htmlToLatex(features[0].features);

    const nonFun = await NonFunctional.find(query).select('-_id -userId -projectId -locked');
    const otherReq = await OtherRequirements.find(query).select('-_id -userId -projectId -locked');
    const otherReqLatex = await htmlToLatex(otherReq[0].requirements);
 
    srsData = { ...srsData, project };
    srsData = { ...srsData, intro };
    srsData = { ...srsData, conventionLatex };
    srsData = { ...srsData, audienceLatex };
    srsData = { ...srsData, scopeLatex };
    srsData = { ...srsData, referencesLatex };
    srsData = { ...srsData, desc };
    srsData = { ...srsData, featuresLatex };
    srsData = { ...srsData, nonFun };
    srsData = { ...srsData, otherReqLatex };
    console.log(srsData);
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

module.exports = router;
