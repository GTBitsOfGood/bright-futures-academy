var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(`<form action="/pay/payment" method="post">
  <input type="submit" value="Buy">
</form>`)
});


module.exports = router;
