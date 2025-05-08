const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController');

// يجب أن يكون `controller.getPosts` و `controller.createPost` دوال حقيقية
router.get('/', controller.getPosts);
router.post('/', controller.createPost);

module.exports = router;
