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

router.get('/login', function (req, res) {  
  res.render('users/login', {title: 'login'});
});

router.post('/login', function (req, res) {  
  console.log(req)
});

router.get('/register', function (req, res) {  
  res.render('users/register', {title: 'register'});
});

router.post('/register', function (req, res) {  
  console.log(req)
});

router.get('/forgot_password', function (req, res) {  
  res.render('users/forgot_password', {title: 'forgot_password'});
});

router.post('/forgot_password', function (req, res) {  
  console.log(req)
});

module.exports = router;
