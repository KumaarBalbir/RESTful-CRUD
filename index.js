const express = require("express");
const bodyparser = require("body-parser");

const app = express();

const PORT = 3000;

app.use(bodyparser.json());

app.listen(3000, () => {
  console.log(`server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  console.log("server is running");
  res.send("Hello from server");
});
