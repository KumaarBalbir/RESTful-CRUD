const express = require("express");
const bodyparser = require("body-parser");
const usersRoutes = require("./routes/users.js");

const app = express();

const PORT = 3000;

app.use(bodyparser.json());

//
app.use("/users", usersRoutes);

// root endpoint is http://localhost:3000
app.get("/", (req, res) => {
  console.log("server is running");
  res.send("Hello from server");
});

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`);
});
