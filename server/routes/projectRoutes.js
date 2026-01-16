const express = require('express');
const router = express.Router();
const {
  getProjects,
  getFeaturedProjects,
  getProjectById,
  createProject,
  updateProject,
  toggleFeatured,
  deleteProject,
} = require('../controllers/projectController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public routes
router.get('/', getProjects);
router.get('/featured', getFeaturedProjects);
router.get('/:id', getProjectById);

// Protected routes
router.post('/', protect, admin, createProject);
router.put('/:id', protect, admin, updateProject);
router.put('/:id/featured', protect, admin, toggleFeatured);
router.delete('/:id', protect, admin, deleteProject);

module.exports = router;
