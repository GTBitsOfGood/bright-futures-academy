var express = require('express');
var router = express.Router();

/**
 * GET: Gets home page
 * TODO: Make sure that this works for the proper pages
 */
router.get('/', function (req, res, next) {
  //This is temporary
  // TODO: replace route with proper action
<<<<<<< HEAD
  res.send(`<form action="/pay/payment/123/4801782027" method="post">
=======

  res.send(`<form action="/pay/payment/123/4801782027" method="post">

>>>>>>> debfb3a3c5f489c84c93d5827699debe7f77a4ce
  <input type="submit" value="Buy">
</form>`)
});


module.exports = router;
