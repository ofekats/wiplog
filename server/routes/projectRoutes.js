import express from "express";
import {
  createProject,
  getProjects,
  getProjectsByLabels,
  updateProject,
  deleteProject
} from "../controllers/projectController.js";
import authMiddleware from "../middleware/auth.js"; // to check if a user is connected

const router = express.Router();

router.post("/", authMiddleware, createProject);

router.get("/", authMiddleware, getProjects);

router.get("/by-labels", authMiddleware, getProjectsByLabels);

router.put("/:id", authMiddleware, updateProject);

router.delete("/:id", authMiddleware, deleteProject);

export default router;
