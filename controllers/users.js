const uuidv4 = require("uuid").v4;

// In real world, this data would be coming from database
let users = [];
const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added to the database`);
};

const getUsers = (req, res) => {
  res.send(users);
};

const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) return res.status(404).send("User not found");
  res.send(foundUser);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  // get users whose id is not id
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database`);
};

const updateUser = (req, res) => {
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
};

module.exports = { createUser, getUsers, getUser, deleteUser, updateUser };
