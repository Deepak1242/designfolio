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
  uploadProjectImage,
} = require('../controllers/projectController');
const { protect, admin } = require('../middleware/authMiddleware');
const multer = require('multer');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype && file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  },
});

// Public routes
router.get('/', getProjects);
router.get('/featured', getFeaturedProjects);
router.get('/:id', getProjectById);

// Protected routes
router.post('/', protect, admin, createProject);
router.post('/upload', protect, admin, upload.single('image'), uploadProjectImage);
router.put('/:id', protect, admin, updateProject);
router.put('/:id/featured', protect, admin, toggleFeatured);
router.delete('/:id', protect, admin, deleteProject);

module.exports = router;
