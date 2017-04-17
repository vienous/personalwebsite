var express = require('express');
var router = express.Router();

var mongo = require('../DB/mongo');
var common = require('../common/common.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  	mongo.find().then(function(result){
  		res.render('index',{posts:result});
  	});
});
module.exports = router;
