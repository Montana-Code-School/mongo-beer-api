
var mongoose = require('mongoose');
var Schema = mogoose.Schema;

var BrewerySchema = new Schema({
  name : String,
  address : String,
  awards : String,
  foodAvailable : Boolean,
  regOfferings : [Beer],
  seasonalOfferings : [Beer]
})

module.exports = mongoose.model('Brewery', BrewerySchema);
