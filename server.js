// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var routes     = require('./routes/routes.js');
var dynamicController = require('./controllers/dynamicController.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var configuration = dynamicController.readEndpoints();

var configuredPort = configuration.port;
var configuredRoot = configuration.root;

var port = process.env.PORT || configuredPort;        // set our port

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/' + configuredRoot, routes);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens at ' + 'http://localhost:' + port + '/' + configuredRoot + '/');