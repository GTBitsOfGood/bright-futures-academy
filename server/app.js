var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const passport = require("passport");
require('dotenv').config();

var indexRouter = require('./routes/index');
var householdRouter = require('./routes/householdRouter');
var studentRouter = require('./routes/studentRouter');
var activityRouter = require('./routes/activityRouter');
var schoolInfoRouter = require('./routes/schoolInfoRouter');
var paymentRouter = require('./routes/payment');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use('/api/household', householdRouter);
app.use('/api/student', studentRouter);
app.use('/api/activity', activityRouter);
app.use('/api/schoolInfo', schoolInfoRouter);
app.use('/api', indexRouter);
app.use('/api/payment',paymentRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
  console.log("Connected to MongoDB")
 });
 
 // Start server to serve endpoints
 console.log('Express started. Listening on port', process.env.PORT || 5000);
 app.listen(process.env.PORT || 5000);

// Render React page (keep this at the bottom of the file)
app.use(express.static(path.join(__dirname, "../client/build/")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = app;
