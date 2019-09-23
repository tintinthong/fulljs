var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers)
  console.log('--------------------------------------------------------------------------------')
  console.log('lets try connecting to a database')
  console.log('--------------------------------------------------------------------------------')
  res.send('this is a db adaptor endpoint. we will connect to all sorts of databases')
});

router.get('/mongo', function(req,res,next){
  console.log('connecting to mongodb database')
})

router.get('/postgres', function(req,res,next){
  console.log('connecting to postgres database')
})

router.get('/firebase',function(req,res,next){
  console.log('connecting to firebase database')
})

module.exports = router;
