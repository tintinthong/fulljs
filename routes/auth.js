var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log('--------------------------------------------------------------------------------')

  // this is from the client
  let payload = {
    id: '1341235',
    data: 'this is some data'
  }
  let secret = process.env.JWT_SECRET || 'secret'

  jwt.sign(JSON.stringify(payload), secret, { algorithm: 'RS256' }, function (err) {
    if (err) {
      console.log(err)
    }
  })

  res.send('you have just posted to auth route')
});


// http://localhost:3000/users?name=justin&age=26

module.exports = router;


