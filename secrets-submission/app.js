//jshint esversion:6
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10; // add salt then hash each round

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true, useUnifiedTopology: true })

// user schema
const userSchema = new mongoose.Schema ({
  email: String,
  password: String
});

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

  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    const newUser = new User({
      email: req.body.username,
      password: hash
    });
    newUser.save(function(err) {
      if (err) {
        consol.log(err);
      } else {
        res.render("Secrets");
      }
    })
  });

});


// validate login
app.post("/login", function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({email: username}, function(err, foundUser) {
    if (err) {
      consol.log(err);
    } else {
      if (foundUser) {
        bcrypt.compare(password, foundUser.password, function(err, result) {
          if (result === true) {
            res.render("Secrets");
          }
        });
      }
    }
  })
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});