const express = require("express");

const router = express.Router();

const users = [
  {
    firstName: "Balbir",
    lastName: "Singh",
    age: 23,
  },
  {
    firstName: "Pranav",
    lastName: "Sha",
    age: 21,
  },
  {
    firstName: "Rohit",
    lastName: "Prasad",
    age: 25,
  },
];

// all routes here will start with /users
router.get("/", (req, res) => {
  res.send(users);
});

module.exports = router;
