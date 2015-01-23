/*
 * Serve JSON to our AngularJS client
 */

var redis = require('redis');
var url = require('url');
var redisURL = url.parse('redis://rediscloud:HyOF8t9zWvQhmpY1@pub-redis-15336.us-east-1-4.2.ec2.garantiadata.com:15336');
var client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
client.auth(redisURL.auth.split(":")[1]);

exports.getDataFromRedis = function (req, res) {

  client.get('foo', function (err, reply) {
    console.log(reply);

    var playersData = JSON.parse(reply);
    res.json(playersData);
  });
};

exports.setDataOnRedis = function (req, res) {

  console.log(req.body);
  var string = JSON.stringify(req.body);
  //var string = "";
  client.set('foo', string);

  res.json(req.body);
};

