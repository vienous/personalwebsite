// var db = require('./DB/mongo');

// db.find(function(result){
// 	console.log(result);
// });

const Mongolass = require('mongolass');
const mongolass = new Mongolass();
const Schema = Mongolass.Schema;


mongolass.connect('mongodb://kafusky:453439@ds145369.mlab.com:45369/kafusky');

const PS = new Schema('PS', {
  title: {type: 'string'}
});

const Test = mongolass.model('test', PS);

Test.insertOne({title:[1,2,3]})
	.then(console.log('insert success'))
	.catch(function(e){
		console.log(e)
	});
