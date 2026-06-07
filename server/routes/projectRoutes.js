const express = require("express");

const {
  createProject,
  getProjects,
  getProjectsByLabels,
  updateProject,
  deleteProject
} = require("../controllers/projectController.js");

const authMiddleware = require("../middleware/auth.js");

const router = express.Router();

router.post("/", authMiddleware, createProject);

router.get("/", authMiddleware, getProjects);

router.get("/by-labels", authMiddleware, getProjectsByLabels);

router.put("/:id", authMiddleware, updateProject);

router.delete("/:id", authMiddleware, deleteProject);

export default router;
