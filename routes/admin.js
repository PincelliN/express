const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");

const router = express.Router();

// admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

//admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log("In Product page", req.body);

  res.redirect("/");
});

module.exports = router;
