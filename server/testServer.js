//This is strictly for testing purposes
const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')
const app = express();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var paymentRouter = require('./routes/payment')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB")
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pay', paymentRouter);
console.log('Express started. Listening on port', process.env.PORT || 5000);
app.listen(process.env.PORT || 5000);