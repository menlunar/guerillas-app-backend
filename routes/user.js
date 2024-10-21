const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// GET attendance
router.get('/', userController.getUser);

// POST attendance
router.post('/', userController.addUser);

module.exports = router;
