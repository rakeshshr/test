// require mongoose
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// define event schema
var eventSchema = new Schema({
  // img_url: {type:String, default: ""},
  name: {type:String, default: ""},
  address: {type:String, default: ""},
  city_state: {type:String, default: ""},
  zip: {type:String, default: ""},
  phone: {type:String, default: ""}
});

// create and export Log model
var Event = mongoose.model('Event', eventSchema);
module.exports = Event;


/*
({img_url:("https://upload.wikimedia.org/wikipedia/commons/0/0f/Hearst_Greek_Theatre_(Berkeley,_CA).JPG"),
name: "Greek Theatre",
  address:"2001 Gayley Rd",
   city_state: "Berkeley, California",
    zip: "94720",
     phone: "(510)-548-3010"})

     ({name: ("http://localmusicvibe.com/sites/default/files/images/venues/fs-graphic.jpg"),
name: "Freight & Salvage Coffeehouse",
  address:"2020 Addison st",
   city_state: "Berkeley, California",
    zip: "94530",
     phone: "(510)-644-2020"})

     ({img_url: ("http://media-cdn.tripadvisor.com/media/photo-s/02/a8/c1/50/zachary-s-chicago-pizza.jpg"),
name: "Zachary's Chicago Pizza",
  address:"2289 Fresno Ave",
   city_state: "Berkeley, California",
    zip: "94606",
     phone: "(510)-525-1389"})

     ({image: ("http://s3-media4.fl.yelpcdn.com/bphoto/sx_DH-0hPHX2JLooJHmB_g/o.jpg"),
name: "Pappys's Grill & Bar",
  address:"2289 International Boulevard",
   city_state: "Albany, California",
    zip: "94609",
     phone: "(510)-575-1359"})

     
     ({image: ("http://s3-media4.fl.yelpcdn.com/bphoto/sx_DH-0hPHX2JLooJHmB_g/o.jpg"),
name: "Pappys's Grill & Bar",
  address:"2289 International Boulevard",
   city_state: "Albany, California",
    zip: "94609",
     phone: "(510)-575-1359"})
     ({
image: ("http://www.berkeleyside.com/wp-content/uploads/2014/05/Screen-shot-2014-05-16-at-12.05.11-PM-720x470.png"),     
 name: "Townie",
  address:"1799 University Ave",
   city_state: "Berkely, California",
    zip: "94606",
     phone: "(510)-356-4903"})

       ({
  image: ("https://manhattanwithatwistdotcom.files.wordpress.com/2013/09/fotofilip-hl-graceinteriorportraits-2851.jpg"),     
   name: "kips",
    address:"2289 Telegraph Ave",
     city_state: "Oakland, California",
      zip: "94606",
       phone: "(510)-575-1359"})









*/