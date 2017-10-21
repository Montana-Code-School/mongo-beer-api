
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Beer = mongoose.model('Beer');

var BrewerySchema = new Schema({
  name : String,
  address : String,
  awards : String,
  foodAvailable : Boolean,
  beers : [{type: Schema.ObjectId, ref: "Beer"}]
//  beers : [Beer]
})

module.exports = mongoose.model('Brewery', BrewerySchema);
