
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BrewerySchema = new Schema({
  name : String,
  address : String,
  awards : String,
  foodAvailable : Boolean,
  regOfferings : [{type: Schema.ObjectId, ref: 'Beer'}],
  seasonalOfferings : [{type: Schema.ObjectId, ref: 'Beer'}]
})

module.exports = mongoose.model('Brewery', BrewerySchema);
