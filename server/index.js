
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  router = require('./router'),
  mongoose = require('mongoose'),
  config = require('./config/main');

// Database Setup
mongoose.connect(config.database);


//static file location for production
app.use(express.static(__dirname + '/build'));

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(logger('dev'));

// Enable CORS 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Import routes to be served
router(app);

// Start the server

app.listen(config.port,function() {
  console.log("App running on port " + config.port);
});