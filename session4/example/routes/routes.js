var fs = require("fs");
var express = require('express');
var passport = require('passport');
var router = express.Router();

var user = require('../roles');

router.get("/", function (req, res) {
    res.render('login');
});

router.post('/login', passport.authenticate('local', {failureRedirect: '/'}), function (req, res) {
    res.redirect('/user');
});

router.get('/user', user.can('auth'), function (req, res) {
    res.render('user', {user: req.user});
});

router.get('/admin', user.can('admin'), function (req, res) {
    res.render('admin');
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;
