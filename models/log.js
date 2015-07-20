// require mongoose
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// define log schema
var LogSchema = new Schema({
  type: String,
  calories: Number
});

// create and export Log model
var Log = mongoose.model('Log', LogSchema);
module.exports = Log;


/*
({project_name: "Events Around Us",
image:("https://upload.wikimedia.org/wikipedia/commons/0/0f/Hearst_Greek_Theatre_(Berkeley,_CA).JPG"),
 Venue: "Greek Theatre",
  address:"2001 Gayley Rd",
   city_state: "Berkeley, California",
    zip: "94720",
     phone: "(510-548-3010"})

     ({project_name: "Events Around Us",
image: ("http://localmusicvibe.com/sites/default/files/images/venues/fs-graphic.jpg"),
 Venue: "Freight & Salvage Coffeehouse",
  address:"2020 Addison st",
   city_state: "Berkeley, California",
    zip: "94530",
     phone: "(510)-644-2020"})

     ({project_name: "Events Around Us",
image: ("http://media-cdn.tripadvisor.com/media/photo-s/02/a8/c1/50/zachary-s-chicago-pizza.jpg"),
 Venue: "Zachary's Chicago Pizza",
  address:"2289 Fresno Ave",
   city_state: "Berkeley, California",
    zip: "94606",
     phone: "(510)-525-1389"})

     ({project_name: "Events Around Us",
image: ("http://s3-media4.fl.yelpcdn.com/bphoto/sx_DH-0hPHX2JLooJHmB_g/o.jpg"),     
 Venue: "Pappys's Grill & Bar",
  address:"2289 International Boulevard",
   city_state: "Albany, California",
    zip: "94609",
     phone: "(510)-575-1359"})

     ({project_name: "Event Around Us",
image: ("http://fuzzybrew.com/wp-content/uploads/2011/04/jupiter-sign.jpg"),     
 Venue: "Jupiter",
  address:"2181 Shattuck Ave",
   city_state: "berkeley, California",
    zip: "94530",
     phone: "(510)-843-8277"})

     ({project_name: "Event Around Us",
image: ("http://www.berkeleyside.com/wp-content/uploads/2014/05/Screen-shot-2014-05-16-at-12.05.11-PM-720x470.png"),     
 Venue: "Townie",
  address:"1799 University Ave",
   city_state: "Berkely, California",
    zip: "94606",
     phone: "(510)-356-4903"})

     ({project_name: "Event Around Us",
image: ("https://manhattanwithatwistdotcom.files.wordpress.com/2013/09/fotofilip-hl-graceinteriorportraits-2851.jpg"),     
 Venue: "kips",
  address:"2289 Telegraph Ave",
   city_state: "Oakland, California",
    zip: "94606",
     phone: "(510)-575-1359"})









*/