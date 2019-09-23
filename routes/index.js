var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('--------------------------------------------------------------------------------')
  const MongoClient = require('mongodb').MongoClient;
  const assert = require('assert');

  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'fulljs';

  // Create a new MongoClient
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  // Use connect method to connect to the Server
  client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // listing  collections 
    db.listCollections().toArray(function (err, collInfos) {
      console.log(collInfos)
    });

    // listing all documents in collection
    const collection = client.db('fulljs').collection('users')
    collection.find({}).forEach((doc) => { //must use forEach, not map
      console.log(doc)
    })

    client.close('db connection is closed ');
  });
  res.render('index', { title: 'Express' });
});


module.exports = router;
