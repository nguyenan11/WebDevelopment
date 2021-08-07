//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true })

// user schema
const userSchema = {
  email: String,
  password: String
};

const User = new mongoose.model("User", userSchema); // new User object

app.get("/", function(req, res) {
  res.render("Home");
});

app.get("/login", function(req, res) {
  res.render("Login");
});

app.get("/register", function(req, res) {
  res.render("Register");
});

// post request on /register
app.post("/register", function(req, res) {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  });

  newUser.save(function(err) {
    if (err) {
      consol.log(err);
    } else {
      res.render("Secrets");
    }
  })
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});