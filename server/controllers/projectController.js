const Project = require('../models/Project');

// @desc    Fetch all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({}).sort({ priority: -1, createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch featured projects only
// @route   GET /api/projects/featured
// @access  Public
const getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ isFeatured: true }).sort({ priority: -1, createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
};

// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = async (req, res) => {
  const { title, description, category, tools, images, files, priority, isFeatured } = req.body;

  const project = new Project({
    title,
    description,
    category,
    tools,
    images,
    files,
    priority,
    isFeatured: isFeatured || false,
  });

  const createdProject = await project.save();
  res.status(201).json(createdProject);
};

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin
const updateProject = async (req, res) => {
  const { title, description, category, tools, images, files, priority, isFeatured } = req.body;

  const project = await Project.findById(req.params.id);

  if (project) {
    project.title = title || project.title;
    project.description = description || project.description;
    project.category = category || project.category;
    project.tools = tools || project.tools;
    project.images = images || project.images;
    project.files = files || project.files;
    project.priority = priority !== undefined ? priority : project.priority;
    project.isFeatured = isFeatured !== undefined ? isFeatured : project.isFeatured;

    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
};

// @desc    Toggle featured status
// @route   PUT /api/projects/:id/featured
// @access  Private/Admin
const toggleFeatured = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    project.isFeatured = !project.isFeatured;
    const updatedProject = await project.save();
    res.json(updatedProject);
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (project) {
    await project.deleteOne();
    res.json({ message: 'Project removed' });
  } else {
    res.status(404).json({ message: 'Project not found' });
  }
};

module.exports = {
  getProjects,
  getFeaturedProjects,
  getProjectById,
  createProject,
  updateProject,
  toggleFeatured,
  deleteProject,
};

