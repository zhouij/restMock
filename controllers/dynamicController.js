var fs = require('fs');

module.exports = {
  init: init
};

function init(router) {
  var endpoints = readEndpoints().endpoint;
  setupEndpoint(router, endpoints);
};

function setupEndpoint(router, endpoints) {

  //console.log(endpoints);
  for (var endpoint in endpoints) {
    console.log("count");
    console.log(endpoints[endpoint].action);

    switch(endpoints[endpoint].action) {
      case "get":
        console.log(endpoints[endpoint]);
        console.log(endpoints[endpoint].body);
        router.get("/" + endpoints[endpoint].path, function (req, res) {
          res.statusCode = endpoints[endpoint].status;
          res.send(endpoints[endpoint].body);
        });
        break;

      case "post":
        console.log(endpoints[endpoint]);
        console.log(endpoints[endpoint].body);
        router.post("/" + endpoints[endpoint].path, function (req, res) {
          res.statusCode = endpoints[endpoint].status;
          res.send(endpoints[endpoint].body);
        });
        break;

      case "put":
        console.log(endpoints[endpoint]);
        router.put("/" + endpoints[endpoint].path, function (req, res) {
          res.statusCode = endpoints[endpoint].status;
          res.send(endpoints[endpoint].body);
        });
        break;

      default:
        console.log("action " + endpoints[endpoint].action + " is not found as a valid action type for this app.");
    }
  }
}

function readEndpoints() {
  var data = fs.readFileSync('./config/config.json', 'utf8');
  var endpoints = JSON.parse(data);
  return endpoints;
};