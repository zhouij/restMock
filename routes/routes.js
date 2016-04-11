var express = require('express');
var dynamicController = require('../controllers/dynamicController.js');
var router = express.Router();

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.statusCode = 200;
  res.json({ message: 'hooray! welcome to our api!',
             endpoints: dynamicController.readEndpoints().endpoints
  });
});

dynamicController.init(router);

module.exports = router;
