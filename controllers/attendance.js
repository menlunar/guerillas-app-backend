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

// DELETE attendance
const deleteAttendance = async (req, res) => {
    try {
        const { id } = req.params;
        const rowsAffected = await attendanceModel.deleteAttendance(id);
        if (rowsAffected) {
            res.status(200).send(`Attendance id ${id} has been successfully deleted`);
        } else {
            res.status(404).send('Attendance record not found');
        }
    } catch (err) {
        res.status(500).send('Error deleting attendance');
    }
};


module.exports = { getAttendance, addAttendance, deleteAttendance };
