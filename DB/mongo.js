
const Mongolass = require('mongolass');
const mongolass = new Mongolass();
const Schema = Mongolass.Schema;


mongolass.connect('mongodb://kafusky:453439@ds145369.mlab.com:45369/kafusky');

const Postschema = new Schema('PostSchema', {
  title: { type: 'string' },
  author: { type: 'string' },
  date: { type :String},
  content:{ type: 'string'},
});

const Post = mongolass.model('Post', Postschema);

exports.add = function(obj){
	Post.insertOne(obj).then(console.log('insert success'));
}

exports.find = function(){
	return new Promise(function(resolve, reject) {
	    Post.find().then(
				function(obj){
					resolve(obj);
				}
			).catch(function(e){
				console.log(e);
			})
	});	
}
