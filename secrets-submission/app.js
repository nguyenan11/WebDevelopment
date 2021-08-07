//jshint esversion:6

const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("Home");
});

app.get("/login", function(req, res) {
  res.render("Login");
});

app.get("/register", function(req, res) {
  res.render("Register");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});