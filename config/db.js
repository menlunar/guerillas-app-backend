// db.js
const { Pool } = require('pg');

// Configuration for your PostgreSQL connection
const pool = new Pool({
    //place this in .env file after prototyping
    user: process.env.DB_USER || 'postgres',     // PostgreSQL username
    host: process.env.DB_HOST || 'localhost',        // PostgreSQL host
    database: process.env.DB_NAME || 'guerillas', // PostgreSQL database name
    password: process.env.DB_PASSWORD || 'admin', // PostgreSQL password
    port: process.env.DB_PORT || 5432,               // Default PostgreSQL port
});

// Test the database connection
pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    console.log('Database connected successfully');
    release();
});

module.exports = pool;
