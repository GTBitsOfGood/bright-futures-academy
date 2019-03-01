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

  res.send(`<form action="/pay/payment/123/4801782027" method="post">

=======
=======
  //This is temporary
  // TODO: replace route with proper action
>>>>>>> Added comments
  res.send(`<form action="/pay/payment/123" method="post">
>>>>>>> Updated paypal integration
  <input type="submit" value="Buy">
</form>`)
});


module.exports = router;
