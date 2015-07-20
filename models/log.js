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
({project_name: "ROOTS: Reclaiming Our Traditions and Stories",
 organization: "Communities United for Restorative Youth Justice",
  contact:"Ruben Leal", address:"2289 International Boulevard",
   city_state: "Oakland, California",
    zip: "94606",
     phone: "(510)-575-1359"})

     ({project_name: "ROOTS: Reclaiming Our Traditions and Stories",
 organization: "Communities United for Restorative Youth Justice",
  contact:"Ruben Leal", address:"2289 International Boulevard",
   city_state: "Oakland, California",
    zip: "94606",
     phone: "(510)-575-1359"})

     ({project_name: "ROOTS: Reclaiming Our Traditions and Stories",
 organization: "Communities United for Restorative Youth Justice",
  contact:"Ruben Leal", address:"2289 International Boulevard",
   city_state: "Oakland, California",
    zip: "94606",
     phone: "(510)-575-1359"})

     ({project_name: "ROOTS: Reclaiming Our Traditions and Stories",
 organization: "Communities United for Restorative Youth Justice",
  contact:"Ruben Leal", address:"2289 International Boulevard",
   city_state: "Oakland, California",
    zip: "94606",
     phone: "(510)-575-1359"})

     ({project_name: "ROOTS: Reclaiming Our Traditions and Stories",
 organization: "Communities United for Restorative Youth Justice",
  contact:"Ruben Leal", address:"2289 International Boulevard",
   city_state: "Oakland, California",
    zip: "94606",
     phone: "(510)-575-1359"})

     ({project_name: "ROOTS: Reclaiming Our Traditions and Stories",
 organization: "Communities United for Restorative Youth Justice",
  contact:"Ruben Leal", address:"2289 International Boulevard",
   city_state: "Oakland, California",
    zip: "94606",
     phone: "(510)-575-1359"})

     ({project_name: "ROOTS: Reclaiming Our Traditions and Stories",
 organization: "Communities United for Restorative Youth Justice",
  contact:"Ruben Leal", address:"2289 International Boulevard",
   city_state: "Oakland, California",
    zip: "94606",
     phone: "(510)-575-1359"})









*/