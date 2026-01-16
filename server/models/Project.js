const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['UI/UX', 'Poster', 'Mockup', 'Editing', 'Other'],
  },
  tools: [{
    type: String,
  }],
  images: [{
    url: { type: String, required: true },
    publicId: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
  }],
  files: [{
    url: String,
    name: String,
    type: String,
  }],
  views: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
