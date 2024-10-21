const userModel = require('../models/user');

// GET attendance
const getUser = async (req, res) => {
    try {
        const data = await userModel.getUser();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send('Error fetching attendance data');
    }
};

// POST attendance
const addUser = async (req, res) => {
    try {
        const userData = req.body;
        const newRecord = await userModel.addUser(attendanceData);
        res.status(201).json(newRecord);
    } catch (err) {
        res.status(500).send('Error adding attendance');
    }
};

module.exports = { getUser, addUser };
