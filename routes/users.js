var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

  // var john = new User({
  //   email: 'jackie@chan.com',
  //   username: 'jackie',
  //   password: 'abc123',
  //   meta:{
  //     first_name: 'Jackie',
  //     last_name: 'Chan'
  //   }
  // });

  // john.save(function (err) {  
  //   if (err) throw err;

  //   console.log('User Created!');
  // });

  res.send('respond with a resource');
});

module.exports = router;
