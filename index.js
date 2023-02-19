const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "hasan", email: "hasan@gmail.com" },
  { id: 2, name: "karim", email: "karim@gmail.com" },
  { id: 3, name: "rahim", email: "rahim@gmail.com" },
  { id: 4, name: "jamal", email: "jamal@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("express loaded");
});
