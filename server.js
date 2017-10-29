var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
//var morgan = require('morgan');
var bp  = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://sp001:iamsp001@ds227555.mlab.com:27555/ssc', { useMongoClient: true}, function(err) {
  //mongoose.Promise = global.Promise;
  if(err) {
    console.log('not ok' + err);
  } else {
    console.log('ok mama..');
  }
});

//app.use(morgan('dev'));
app.use(bp.json());
app.use(bp.urlencoded({ extended : true }));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(port, function() {
  console.log('server is running on port ' + port);
});
