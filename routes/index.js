var express = require('express');
var router = express.Router();

var mongo = require('../DB/mongo');
var common = require('../common/common.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  	mongo.find(function(result){
  		result.forEach(function(obj){
  			common.time(obj.date,function(New_time){
  				obj.date = New_time;
  			});
  		})
  		res.render('index', { posts: result });
  		
  	});
});
module.exports = router;
