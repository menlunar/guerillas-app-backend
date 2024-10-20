const attendanceModel = require('../models/attendance');

// GET attendance
const getAttendance = async (req, res) => {
    try {
        const data = await attendanceModel.getAttendance();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send('Error fetching attendance data');
    }
};

// POST attendance
const addAttendance = async (req, res) => {
    try {
        const attendanceData = req.body;
        const newRecord = await attendanceModel.addAttendance(attendanceData);
        res.status(201).json(newRecord);
    } catch (err) {
        res.status(500).send('Error adding attendance');
    }
};

module.exports = { getAttendance, addAttendance };
