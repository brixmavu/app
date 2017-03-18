var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function (req, res) {  
  res.render('users/login', {
    title: 'Sign in'
  });
})
.post('/login', function (req, res) {  
  console.log(req);
});

router.get('/logout', function (req, res) {  
  
    //destory Session
    req.session.destroy(function (err) {  
      //fail
      if (err) {
        //@TODO: flash msg
        res.redirect('/');
      }

      //success
      //@TODO: flash msg
      res.redirect('/');
    })
});

router.get('/register', function (req, res) {  
  res.render('users/register', {
    title: 'Register'
  });
})
.post(function (req, res) {
  var email = req.param('email');
  var password = req.param('password');  
  var passwordConfirm = req.param('passwordConfirm');

  if (password != passwordConfirm) {
    //@TODO: flash message
    req.redirect('/register');

  } 

});

router.get('/register_pending', function (req, res) {  
  res.render('users/register_pending', {
    title: 'Register Pending'
  });
});

router.get('/register_confirm', function (req, res) {  
  res.render('users/register_confirm', {
    title: 'Register Confirm'
  });
});

router.get('/password_forgot', function (req, res) {  
  res.render('users/password_forgot', {
    title: 'Forgot Password'
  });
})
.post(function (req, res) {  
  console.log(req);
});

router.get('/password_reset', function (req, res) {  
  res.render('users/password_reset', {
    title: 'Password Reset'
  });
})
.post( function (req, res) {  
  console.log(req);
})

router.get('/delete', function (req, res) {
   if (req.param('confirm') == 1) {
     var id = req.session._id;

     if (req.param('softDelete') == 1) {
       //Soft delete
       User.update({_id: id}, { $set: { deleted_at: Date }}, function (err) {  
         if (err) {
           // @TODO: flash message
           res.redirect('/users/delete');
         }
       });
     } else{
       //Hard delete
       User.find({ _id: id}).remove(function (err) {  
          if (err) {
            // @TODO: flash message
            res.redirect('/users/delete');
          }
       });
     }
     //success
     // @TODO: flash message
     req.session.destroy();
     res.redirect('/');
   }
  });

  router.get('/reactivate', function (req, res) {  
    res.render('users/account_reactivate');
  })
  .post(function (req, res) {  
    var email = req.param('email');

    User.find({ email: email}, function (err) {  
      if (err) {
        //@TODO: flash message
        res.redirect('/reactivate');
      }
    });

    // @TODO: send email to user with /reactivate/<code_here>
  });

  router.get('/reactivate/:code', function (req, res) { 
    var code = req.param('code');
    //var code = req.query('code);
   });


module.exports = router;
