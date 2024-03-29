const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/users.js");

// all routes here will start with /users
router.get("/", getUsers);

//browser only can do get request, so to test it, use postman
router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

// PUT is used to completely overwrite the data
// PATCH is used to update some part of the data
router.patch("/:id", updateUser);

module.exports = router;
