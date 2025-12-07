import Project from "../models/Project.js";

// create new project
export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all project of this user
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.user.id });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get only projects with a lable
export const getProjectsByLabels = async (req, res) => {
  try {
    const labels = req.query.labels ? req.query.labels.split(",") : [];
    const projects = await Project.find({
      userId: req.user.id,
      labels: { $in: labels }
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// update project
export const updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete project
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
