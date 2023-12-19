const mysql = require('mysql2');
require('dotenv').config();


const pool = mysql.createPool({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10671673',
    password: 'iD13jFzYb8',
    database: 'sql10671673',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = {
    conn: pool.promise()
};
