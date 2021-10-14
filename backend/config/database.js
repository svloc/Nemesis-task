const { createPool } = require('mysql');

const pool = createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME||'root',
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "todo"
});

module.exports = pool;