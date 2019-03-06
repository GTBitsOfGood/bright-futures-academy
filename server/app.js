var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config();

var indexRouter = require('./routes/index');
var householdRouter = require('./routes/householdRouter');
var studentRouter = require('./routes/studentRouter');
var activityRouter = require('./routes/activityRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/household', householdRouter);
app.use('/api/student', studentRouter);
app.use('/api/activity', activityRouter);
app.use('/api', indexRouter);

// Render React page (keep this at the bottom of the file)
app.use(express.static(path.join(__dirname, "../client/build/")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
  console.log("Connected to MongoDB")
});

console.log('Express started. Listening on port', process.env.PORT || 5000);
app.listen(process.env.PORT || 5000);

module.exports = app;
