const authUser = require("../routes/auth"); // login auth
const users = require("../routes/user");
const projects = require('../routes/project')
const stakeholder = require('../routes/stakeholder');
const requirement = require('../routes/requirement');
const document = require('../routes/document');
const phases = require('./../routes/phases');
const error = require('../middleware/error');
const express = require("express");

module.exports = function (app) {

  app.use(express.json());
  app.use("/api/users", users);   // register manager/user | get all | get specific
  app.use("/api/users/me", users); // get current login user details
  app.use("/api/auth", authUser);  // login user 
  app.use("/api/projects", projects); // GET Project | POST add project
  app.use("/api/projects/stakeholder", stakeholder); // POST | Add Stakeholder
  app.use("/api/manager/requirement", requirement); // POST | Manager Add Req
  app.use("/api/project", document); // POST | 
  app.use("/api/phases", phases); // POST | 

  //called when execption occured
  app.use(error);
};
