var express = require('express');
var router = express.Router();

var mongo = require('../DB/mongo');
var common = require('../common/common.js');
var config = require('../config.js')

/* GET home page. */
router.get('/', function(req, res, next) {
	var result = {};
	result['categories'] = config.categories;
	result['introduce'] = config.introduce;
	result['information'] = config.indexContent;

  	mongo.find().then(function(posts){
  		result['posts'] = posts;
  		res.render('index',{result:result});
  	});
});
module.exports = router;
