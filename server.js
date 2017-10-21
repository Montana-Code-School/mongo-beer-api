const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var Beer = require('./models/beer');
var Brewery = require('./models/brewery');


mongoose.connect('mongodb://localhost/beerAPI');


var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.use(function(req, res, next){
  console.log('Someone is drinking');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'hooray'});
});

router.route('/beers')
// create a beer
  .post(function(req, res){
    var beer = new Beer();
    console.log("beer belly init")
    beer.name = req.body.name;
    beer.type = req.body.type;
    beer.ibu = req.body.ibu;
    beer.abv = req.body.abv;
    beer.labelImage = req.body.labelImage;
    beer.tasteProfile = req.body.tasteProfile;
    beer.awards = req.body.awards;

    beer.save(function(err){
      if(err)
        res.send(err);

        res.json({message: "Beer created"});
    });
  })
  // get all beers
    .get(function(req, res){
      Beer.find(function(err, beers){
        if (err){
        res.send(err);
        }
        res.json(beers);
      });
    });


  router.route('/breweries')
  // create a brewery
    .post(function(req, res){
      var brewery = new Brewery();
      console.log("brewery belly init")
      brewery.name = req.body.name;
      brewery.address = req.body.address;
      brewery.awards = req.body.awards;
      brewery.foodAvailable = req.body.foodAvailable;
      brewery.beers = req.body.beers;

      brewery.save(function(err){
        if(err){
          res.send(err);
        }
          res.json({message: "Brewery created"});
      });
    })
    // get all breweries
    .get(function(req, res){
      Brewery.find(function(err, breweries){
        if (err){
        res.send(err);
        }
        res.json(breweries);
      });
    })

  // update all breweries
//   router.route('/breweries/:breweryid')
//   .put(function(req, res){
// //    Model.findByIdAndUpdate(id, updateObj, {new: true}, function(err, model) {...
//     Brewery.findByIdAndUpdate(req.params.breweryid, req.body, function(err, brewery){
//       if (err) {
//         res.send(err);
//       }
//       res.json(brewery)
//     });
//   })

app.use('/api', router);

app.listen(port);
console.log('magic ' + port);
