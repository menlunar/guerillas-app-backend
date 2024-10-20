const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance');

// GET attendance
router.get('/', attendanceController.getAttendance);

// POST attendance
router.post('/', attendanceController.addAttendance);

module.exports = router;
