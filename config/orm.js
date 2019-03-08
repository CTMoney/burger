const connection = require("./connection");

const orm = {

    allBurgers(table, cb) {
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) {throw err}
            cb(result);
        })
    },

    newBurger(burgerName, cb) {
        var queryString = `INSERT INTO burgers (burger_name) VALUES (${burgerName});`;
        connection.query(queryString, (err,result) => {
            if (err) {throw err}
            cb(result);
        })
    },

    updateBurger(burgerId, cb) {
        var queryString = `UPDATE burgers SET devoured = true WHERE id = ${burgerId};`;
        connection.query(queryString, (err,result) => {
            if (err) {throw err}
            cb(result);
        })
    }

}

module.exports = orm;