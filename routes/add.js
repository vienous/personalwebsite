var moment = require('moment');

var mongo = require('../DB/mongo.js');


var obj = {
	title:'Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.',
	author:"author",
	date:moment().format("MMMM Do YYYY, h:mm:ss a"),
	content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere. Curabitur nec nisl odio. Mauris vehicula at nunc id posuere.'
}

mongo.add(obj);