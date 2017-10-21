const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'hooray'});
});

app.use('/api', router);

app.listen(port);
console.log('magic ' + port);
