
const orm = require("../config/orm");

const burger = {

    all(table, cb) { orm.allBurgers(table, res => cb(res)) },

    new(burgerName, cb) { orm.newBurger(burgerName, res => cb(res)) },

    update(burgerId, cb) { orm.updateBurger(burgerId, res => cb(res)) }

}

module.exports = burger;