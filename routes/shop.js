const path = require("path");
const express = require("express");
const rootDir = require("../utils/path");
const router = express.Router();
/*
 __dirname è il path assoluto della directory del file corrente.

path.join(...) costruisce il path completo del file in modo cross-platform 
 */
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
