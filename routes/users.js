const express = require("express");

const router = express.Router();
const uuidv4 = require("uuid").v4;

// In real world, this data would be coming from database
let users = [];

// all routes here will start with /users
router.get("/", (req, res) => {
  res.send(users);
});

//browser only can do get request, so to test it, use postman
router.post("/", (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added to the database`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) return res.status(404).send("User not found");
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  // get users whose id is not id
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database`);
});

// PUT is used to completely overwrite the data
// PATCH is used to update some part of the data
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with the id ${id} has been updated`);
});

module.exports = router;
