var express = require("express");
var router = express.Router();
const name = require("../person.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", name);
});

module.exports = router;
