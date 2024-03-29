const express = require("express");

const router = express.Router();

// all routes here will start with /users
router.get("/", (req, res) => {
  res.send("users");
});

module.exports = router;
