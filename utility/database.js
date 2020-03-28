const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'weather-api',
    password: 'yup18WBK'
});

module.exports = pool.promise();

