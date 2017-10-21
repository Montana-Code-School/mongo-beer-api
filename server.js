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

router.route('/beer')
  .post(function(req, res){
    var beer = new Beer();
    console.log("beer belly init")
    beer.name = req.body.name;

    beer.save(function(err){
      if(err)
        res.send(err);

        res.json({message: "Beer created"});
    });
  });

  router.route('/brewery')
    .post(function(req, res){
      var brewery = new Brewery();
      console.log("brewery belly init")
      brewery.name = req.body.name;

      brewery.save(function(err){
        if(err)
          res.send(err);

          res.json({message: "Brewery created"});
      });
    });

app.use('/api', router);

app.listen(port);
console.log('magic ' + port);
