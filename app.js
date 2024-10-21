// app.js
require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const cors = require('cors'); // Import CORS middleware
const attendanceRoutes = require('./routes/attendance');
const userRoutes = require('./routes/user');

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Routes
app.use('/attendance', attendanceRoutes);
app.use('/user', userRoutes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
