var fs = require('fs');

module.exports = {
  init: init,
  readEndpoints:readEndpoints
};

function init(router) {
  var config = readEndpoints();
  setupEndpoint(router, config);
};

function setupEndpoint(router, config) {
  config.endpoints.forEach(function (endpoint) {
    router[endpoint.action]("/" + endpoint.path, function (req, res) {
      res.statusCode = endpoint.statusCode;
      res.send(endpoint.body);
    });
  });
}

function readEndpoints() {
  var data = fs.readFileSync('./config/config.json', 'utf8');
  var endpoints = JSON.parse(data);
  return endpoints;
};