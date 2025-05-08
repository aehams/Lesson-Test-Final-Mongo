const express = require('express');
const router = express.Router();
const controller = require('../controllers/commentController');

router.get('/', controller.getComments);
router.post('/', controller.createComment);

module.exports = router;
