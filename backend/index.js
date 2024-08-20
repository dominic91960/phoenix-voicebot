// npm run dev

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/db-test");

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok" });
    console.log("works");
  } catch (error) {
    res.json({ status: "error", error: error });
    console.log(error);
  }
});

app.post("/api/login", async (req, res) => {
  console.log(req.body);
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.get("/hello", async (req, res) => {
  res.json({ status: "ok", message: "hello" });
});

app.listen(1337, () => {
  console.log("Server Started on Port 1337");
});
