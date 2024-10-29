// routes/projectRoutes.js
const express = require("express");
const auth = require("../middleware/auth");
const Project = require("../models/Project");
const router = express.Router();

router.post("/projects", auth, async (req, res) => {
  const { title, description, budget } = req.body;
  const project = new Project({
    title,
    description,
    budget,
    createdBy: req.user._id,
  });
  await project.save();
  res.json(project);
});

router.get("/projects", auth, async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

module.exports = router;
