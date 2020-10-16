//==============
// Dependencies
//==============
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");
//=======================================================
// Sets up the read function from the back-end (database)
//=======================================================
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//=====================================================
// Sets up create function from the back-end (database)
//=====================================================
router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});
//=====================================================
// Sets up update function from the back-end (database)
//=====================================================
router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
//====================
// Exports the router
//====================
module.exports = router;