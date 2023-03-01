const express = require("express");
const auth = require("../middleware/auth");
const manager = require("../middleware/manager");
const { Phases, phasesValidation } = require("./../models/phases");
const { Project } = require("../models/project");
const _ = require("lodash");

const router = express.Router();

// POST | PROJECT Phases | 2 MIDDLWARE { AUTH, MANAGER } | USER_ID FROM MIDDLEWARE
router.post("/", [auth, manager], async (req, res, next) => {
  console.log(req.body);
  try {
    const bodyData = { userId: req.user._id, ...req.body };
    const phaseData = _.pick(bodyData, [
      "userId",
      "projectId",
      "phaseId",
      "phase",
      "status",
    ]);
    const { error } = phasesValidation(phaseData);
    if (error) return res.status(400).send(error.details[0].message);

    const isUnique = await Project.findById(req.body.projectId);
    if (!isUnique) return res.status(400).send("Project not found.");

    const isManager = await Project.findOne(
      { _id: req.body.projectId },
      { manager: req.user._id }
    );
    if (!isManager) return res.status(403).send("Access denied.");

    const isUpdate = await Phases.find({
      projectId: req.body.projectId,
      phaseId: req.body.phaseId,
    });
    if (isUpdate[0]) {
      const updateId = isUpdate[0]._id;
      console.log("update");
      await Phases.findOneAndUpdate(
        { _id: updateId },
        {
          $set: {
            userId: req.user._id,
            projectId: req.body.projectId,
            phase: req.body.phase,
            status: req.body.status,
            updatedAt: Date.now,
          },
        }
      );
      res.status(200).send("Successfully Updated.");
    } else {
      let phase = new Phases(phaseData);
      await phase.save();
      res.status(200).send("Successfully Updated.");
    }
  } catch (err) {
    console.log(err);
    next();
  }
});

module.exports = router;
