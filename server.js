// Required Packages
var express = require("express");
var app = express();
var PORT = process.env.PORT || 3001;
var mongoose = require("mongoose");
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

require('dotenv').config();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

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
routes(app)

// Connect to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/carsdb")

app.listen(PORT, function () {
  console.log("App is listening http://localhost:" + PORT)
})
