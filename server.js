var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;
var mongoose = require("mongoose");
var passport = require('passport');
var session = require('express-session');

app.use(express.urlencoded({ extended: true }))
app.use(express.json)

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

var routes = require("./routes/apiroutes")


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/carsdb")

app.listen(PORT, function () {
  console.log("App is listening http://localhost:" + PORT)
})
