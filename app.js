const express = require('express');
const attendanceRoutes = require('./routes/attendance');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Attendance routes
app.use('/attendance', attendanceRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
