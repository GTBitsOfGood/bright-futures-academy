
//This is strictly for testing purposes
const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')
const app = express();
var indexRouter = require('./routes/index');
var householdRouter = require('./routes/householdRouter');
var studentRouter = require('./routes/studentRouter');
var activityRouter = require('./routes/activityRouter');

require('dotenv').config();
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/household', householdRouter);
app.use('/api/student', studentRouter);
app.use('/api/activity', activityRouter);
app.use('/api', indexRouter);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB")
});

console.log('Express started. Listening on port', process.env.PORT || 5000);
app.listen(process.env.PORT || 5000);
