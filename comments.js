// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const comments = require('../controllers/comments');

// Routes
router.get('/', comments.getAll);
router.get('/:id', comments.getOne);
router.post('/', comments.create);
router.put('/:id', comments.update);
router.delete('/:id', comments.delete);

// Export router
module.exports = router;