const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "hasan", email: "hasan@gmail.com" },
  { id: 2, name: "karim", email: "karim@gmail.com" },
  { id: 3, name: "rahim", email: "rahim@gmail.com" },
  { id: 4, name: "jamal", email: "jamal@gmail.com" },
];



const uri = "mongodb+srv://admin:admin@cluster0.9cvoutl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("api").collection("users");
  // perform actions on the collection object
  console.log('database connected');
  client.close();
});



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
