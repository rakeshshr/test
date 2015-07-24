//requiring modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Event = require('./models/event'),
    User = require('./models/user'),
    // db = require('./models/user'),
    session = require('express-session');

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/events');// plug in the db name you've been using



//middleware
//app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// setting view engine to render html files

app.set('views', __dirname + '/public');
//app.set('view engine', 'ejs');


// set session options
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 60000 }
}));

app.use('/', function (req, res, next) {
  // saves userId in session for logged-in user
  req.login = function (user) {
    req.session.userId = user.id;
  };

  // finds user currently logged in based on `session.userId`
  req.currentUser = function (callback) {
    User.findOne({_id: req.session.userId}, function (err, user) {
      req.user = user;
      callback(null, user);
    });
  };

  // destroy `session.userId` to log out user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  };

  next();
});

// AUTHORIZATION

// signup route (renders signup view)
app.get('/signup', function (req, res) {
 res.sendFile(__dirname + '/public/views/signup.html');
});

// user submits the signup form
app.post('/users', function (req, res) {

 // grab user data from params (req.body)
 //var newUser = req.body.user;
var email = req.body.email;
var password = req.body.password;
 // create new user with secure password
 User.createSecure( email, password, function (err, user) {
   //req.login(user);
   res.redirect('/login');
 });
});

// AUTHENTICATION

// user submits the login form
app.post('/login', function (req, res) {
//console.log('post');
 // grab user data from params (req.body)
 var userData = req.body.user;
 console.log(userData);

 // call authenticate function to check if password user entered is correct
 User.authenticate(userData.email, userData.password, function (err, user) {
 // saves user id to session
 req.login(user);
 res.redirect('/')
});
});

// user profile page
app.get('/index', function (req, res) {
 // finds user currently logged in
 req.currentUser(function (err, user) {
   res.send('Welcome ' + user.email);
 });
});

app.get('/logout', function(req, res) {
 req.logout();
 res.redirect('/');
});



// login route (renders login view)
app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/public/views/login.html');
});






// STATIC ROUTES

// homepage
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

// profile page
app.get('/profile', function (req, res) {
  // check for current (logged-in) user
  req.currentUser(function (err, user) {
    // show profile if logged-in user
    if (user) {
      res.sendFile(__dirname + '/public/views/profile.html');
    // redirect if no user logged in
    } else {
      res.redirect('/');
    }
  });
});


    // show all Projects
app.get('/api/events', function (req, res) {
  Event.find(function (err, events) {
    res.json(events);
  });
});

// post new event
app.post('/api/events', function (req, res) {
  
  var newEvent = new Event({
   
    // img_url: req.body.img_url,
    name: req.body.name,
    address: req.body.address,
    city_state: req.body.city_state,
    zip: req.body.zip,
    phone: req.body.phone
  });
    

  // save new bar in db
  newEvent.save(function (err, savedEvent) {
    res.json(savedEvent);
  });
});

// get a single event 
app.get('/api/events/:id', function(req, res) {

  // take the value of the id from the url parameter
  // note that now we are NOT using parseInt
  var targetId = req.params.id

  // find item in database matching the id
  Event.findOne({_id: targetId}, function(err, foundEvent){
    console.log(foundEvent);
    if(err){
      console.log("error: ", err);
      res.status(500).send(err);
    } else {
      // send back post object
      res.json(foundEvent);
    }
  });

});

// delete post
app.delete('/api/events/:id', function(req, res) {

  // take the value of the id from the url parameter
  var targetId = req.params.id;

 // remove item from the db that matches the id
   Event.findOneAndRemove({_id: targetId}, function (err, deletedEvent) {
    if (err){
      res.status(500).send(err);
    } else {
      // send back deleted post
      res.json(deletedEvent);
    }
  });
});












 




// listen on port 3000
app.listen(process.env.PORT || 3000);
