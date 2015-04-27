var path = require('path'),

    express = require('express'),
    bodyParser = require('body-parser'),
    swig = require("swig");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

var session = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

app.use(session({secret: 'blablalba'}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function (username, password, done) {
        setTimeout(function () {
            if (username === 'vasya' && password === 'pupkin') {
                done(null, {username: username, firstName: 'Vasya', lastName: 'Pupkin', role: 'administrator'});
            } else {
                done(null, false);
            }
        }, 50);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

var user = require('./roles');

app.use(user.middleware());

app.use('/', require("./routes/routes"));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
