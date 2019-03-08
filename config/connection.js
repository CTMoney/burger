const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "anubis10",
    database: "burgers_db"    
});

connection.connect((err) => {
    if (err) {throw err.stack};
    console.log(`connected as id: ${connection.threadId}`)
});

module.exports = connection;