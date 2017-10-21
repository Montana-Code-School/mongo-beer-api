var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
  name : String,
  type : String,
  labelImage : String,
  ibu : Number,
  abv : Number,
  tasteProfile : String,
  awards : String
})

model.exports = mongoose.model('Beer', BeerSchema);
