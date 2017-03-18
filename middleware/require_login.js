'use strict';

function requireLogin(req, res, next) {
    console.log('Middleware Triggered');
    console.log(req.session);

    if (req.session.loggedin == 1) {
        next();     
    } else {
        res.redirect('/users/login');
    }  
}

module.exports = requireLogin;