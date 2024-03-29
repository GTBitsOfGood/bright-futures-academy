var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
const passport = require("passport");
require('dotenv').config();

var indexRouter = require('./routes/index');
var householdRouter = require('./routes/householdRouter');
var studentRouter = require('./routes/studentRouter');
var activityRouter = require('./routes/activityRouter');
var schoolInfoRouter = require('./routes/schoolInfoRouter');
var paymentRouter = require('./routes/paymentRouter')
var emailRouter = require('./routes/emailRouter')

var app = express();

// our dev server and client run on 2 different ports
// so we need to whitelist the client address
if (app.get('env') === 'development') {
  const whitelist = ['http://localhost:3000', 'https://bright-futures-academy-dev.herokuapp.com/', 'https://bright-futures-academy-dev.herokuapp.com/makePayment']
  const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        console.log(origin);
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
  app.use(cors(corsOptions));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/household', householdRouter);
app.use('/api/student', studentRouter);
app.use('/api/activity', activityRouter);
app.use('/api/schoolInfo', schoolInfoRouter);
app.use('/api/email', emailRouter)
app.use('/api', indexRouter);
app.use('/api/payment', paymentRouter)

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


function handleError(err, req, res, next) {
  const statusCode = err.statusCode ? err.statusCode : 500
  const message = err.message ? err.message : 'Something broke!'
  console.error(err.stack)
  res.status(statusCode).send(message)
}
app.use(handleError)

module.exports = app;
