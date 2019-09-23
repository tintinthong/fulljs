var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('--------------------------------------------------------------------------------')
  // res.render('users',{title: 'user title'})
  res.send('this is the login page')
});

// http://localhost:3000/users?name=justin&age=26

module.exports = router;


