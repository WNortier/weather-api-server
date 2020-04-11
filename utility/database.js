const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'warwick',
    database: 'weather-api',
    password: 'wnortier'
});

module.exports = pool.promise();

