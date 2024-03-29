const express = require("express");

const router = express.Router();

// In real world, this data would be coming from database
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

//browser only can do get request, so to test it, use postman
router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`User with the name ${user.firstName} added to the database`);
});
module.exports = router;
