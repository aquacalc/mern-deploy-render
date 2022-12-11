const express = require("express");
const router = express.Router();
const path = require("path");

// regex tip: ONLY match '/' (Nice touch)
//            OR 'index' with or without '.html'
router.get("^/$|/index(.html)?", (req, res) => {
  console.log(`Evo me u root-u`);
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
