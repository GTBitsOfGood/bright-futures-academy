var express = require('express');
var router = express.Router();

/**
 * GET: Gets home page
 * TODO: Make sure that this works for the proper pages
 */
router.get('/', function (req, res, next) {
<<<<<<< HEAD
<<<<<<< HEAD
  //This is temporary
  // TODO: replace route with proper action
<<<<<<< HEAD

  res.send(`<form action="/pay/payment/123/4801782027" method="post">

=======
=======
  //This is temporary
  // TODO: replace route with proper action
>>>>>>> Added comments
  res.send(`<form action="/pay/payment/123" method="post">
>>>>>>> Updated paypal integration
=======
  res.send(`<form action="/pay/payment/123/4801782027" method="post">
>>>>>>> This will update the activities array of students after a purchase is made
  <input type="submit" value="Buy">
</form>`)
});


module.exports = router;
