var db = require('./DB/mongo');

db.find(function(result){
	console.log(result);
});
