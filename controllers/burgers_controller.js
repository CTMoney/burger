const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {

    burger.all("burgers", (data) => {
        let myBurgs = {data}
        res.render("index", myBurgs)
    })
});

router.post("/api/burgers", (req,res) => {

    burger.new(req.body.burgerName, (result) => {
        res.json({ id: result.insertId })
    })

});

router.put("api/burgers/:id", (req,res) => {
    
    burger.update(req.params.id, (result) => {
        return result.changedRows == 0 ? res.status(404).end() : res.status(200).end()
    })
});

module.exports = router;