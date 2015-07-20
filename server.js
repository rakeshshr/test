var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Log = require('./models/log'),
    User = require('./models/user'),
    session = require('express-session');

    

// connect to mongodb
mongoose.connect('mongodb://localhost/gigs_around_me');

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 60000 }
}));




// listen on port 3000
app.listen(process.env.PORT || 3000);
